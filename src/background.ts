const tabs = chrome.tabs
const prefixRegEx = /^[0-9]\..*$/

type TabInfo = {
  windowId: number,
  tabId: number
} | undefined




const getKeys = (cb: (keys: TabInfo[]) => void) => {
  chrome.storage.local.get(['keys'], ({ keys }) => {
    cb(keys || [])
  });
}

function toggleTab(key: string | number) {
  getKeys(async (keys) => {
    const tabInfo = keys[Number(key)]
    if (!tabInfo) {
      return
    }
    await chrome.windows.update(tabInfo.windowId, { focused: true })
    await chrome.tabs.update(tabInfo.tabId, {
      active: true,
    })
  })
}

function findKey(windowId: number, tabId: number): number {
  let index = -1
  getKeys((keys) => {
    for (let i = 1; i < 10; i++) {
      const tabInfo = keys[i]
      if (tabInfo) {
        if (tabInfo.windowId === windowId && tabInfo.tabId === tabId) {
          index = i
        }
      }
    }
  })
  return index
}

chrome.runtime.onMessage.addListener(async (request, { tab }, sendResponse) => {
  if (request.action === 'checkNumber') {
    const key = findKey(tab?.windowId as number, tab?.id as number)
    sendResponse(key)
  }
});

async function setTab(key: number, tab: chrome.tabs.Tab) {
  const window = await chrome.windows.getCurrent()
  if (tab && window) {
    setTabInfo(key, { tabId: tab.id as number, windowId: window.id as number })
  }
}

let time: NodeJS.Timeout
// keys定义为数组
function setTabInfo(index: number, tabInfo: TabInfo) {
  getKeys((keys) => {
    // 如果已存在，则重置被覆盖tab的title
    const tabId = keys[index]?.tabId ?? -1
    if (tabId > -1) {
      sendClearNumber(tabId)
    }
    // 如果重新编号，则删除之前的编号
    let existedIndex = keys.findIndex(item => item?.tabId === tabInfo?.tabId && item?.windowId === tabInfo?.windowId)
    if (existedIndex >= 0) {
      keys[existedIndex] = undefined
    }
    keys[index] = tabInfo
    chrome.storage.local.set({ keys })
    if (tabInfo) {
      sendSetNumber(tabInfo.tabId, index)
      const notificationId = `setTab`
      chrome.notifications.clear(notificationId);
      clearTimeout(time)
      chrome.notifications.create(notificationId, {
        type: 'basic',
        iconUrl: chrome.runtime.getURL(`icon.png`),
        title: 'set shortcuts Success',
        message: `Set the current tab to N0.${index}`,
        priority: 0,
        silent: true
      }, (notificationId) => {
        time = setTimeout(function () {
          chrome.notifications.clear(notificationId);
        }, 3000);
      })
    }
  })
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

chrome.commands.onCommand.addListener((command, tab: chrome.tabs.Tab) => {
  if (/switch./.test(command)) {
    toggleTab(command[command.length - 1])
    return
  }
  if (
    /set./.test(command)
  ) {
    const number = Number(command[command.length - 1])

    setTab(number, tab)
  }
})
