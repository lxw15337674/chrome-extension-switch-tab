const tabs = chrome.tabs
const prefixRegEx = /^[0-9]\..*$/

interface TabInfo {
  windowId: number,
  tabId: number
}
let keys: (TabInfo | undefined)[] = []


async function toggleTab(key: string | number) {
  const tabInfo = keys[Number(key)]
  if (!tabInfo) {
    return
  }
  await chrome.windows.update(tabInfo.windowId, { focused: true })
  await chrome.tabs.update(tabInfo.tabId, {
    active: true,
  })
}

function findKey(windowId: number, tabId: number): number {
  for (let i = 1; i < 10; i++) {
    const tabInfo = keys[i]
    if (tabInfo) {
      if (tabInfo.windowId === windowId && tabInfo.tabId === tabId) {
        return i
      }
    }
  }
  return -1
}

async function getActiveTab() {
  const [tab] = await tabs.query(({ active: true, currentWindow: true }))
  return tab
}

chrome.runtime.onMessage.addListener(async (request, { tab }, sendResponse) => {
  if (request.action === 'checkNumber') {
    const key = findKey(tab?.windowId as number, tab?.id as number)
    sendResponse(key)
  }
});

async function setTab(key: number) {
  const tab = await getActiveTab()
  const window = await chrome.windows.getCurrent()
  if (tab && window) {
    keysSet(key, { tabId: tab.id as number, windowId: window.id as number })
  }
}


// keys定义为数组
function keysSet(index: number, tabInfo: TabInfo) {
  // 如果已存在，则重置被覆盖tab的title
  const tabId = keys[index]?.tabId
  if (tabId) {
    sendClearNumber(tabId)
  }
  // 如果重新编号，则删除之前的编号
  let existedIndex = keys.findIndex(item => item?.tabId === tabInfo.tabId && item?.windowId === tabInfo.windowId)
  if (existedIndex >= 0) {
    const tabId = keys[existedIndex]?.tabId as number
    sendClearNumber(tabId)
    keys[existedIndex] = undefined
  }
  keys[index] = tabInfo
  sendSetNumber(tabInfo.tabId, index)
}

const sendSetNumber = (tabId: number, key: number) => {
  tabs.sendMessage(tabId, { action: 'setNumber', key })
}

const sendClearNumber = (tabId: number) => {
  tabs.sendMessage(tabId, { action: 'clearNumber' })
}



const reloadAllTab = async () => {
  const allTabs = await tabs.query({})
  for (let tab of allTabs) {
    if (tab.id) {
      tabs.reload(tab.id)
    }
  }
}

chrome.commands.onCommand.addListener((command, tab) => {
  if (/switch./.test(command)) {
    toggleTab(command[command.length - 1])
    return
  }
  if (
    /set./.test(command)
  ) {
    const number = Number(command[command.length - 1])
    chrome.notifications.clear('setTab');
    chrome.notifications.create('setTab', {
      type: 'basic',
      iconUrl: chrome.runtime.getURL(`icon.png`),
      title: '设置成功',
      message: `设置当前标签页为${number}`,
      priority: 0,
      silent: true
    }, (notificationId) => {
      setTimeout(function () {
        chrome.notifications.clear(notificationId);
      }, 2000);
    })
    setTab(number)
  }
})

