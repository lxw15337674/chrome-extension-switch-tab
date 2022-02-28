const tabs = chrome.tabs
const prefixRegEx = /^[0-9]\..*$/


let keys:number[] = []

const serializer = (value:any) => {
  return JSON.stringify(value)
}
const deserializer = (value:any) => {
  return JSON.parse(value);
}

async function toggleTab(key:string) {
  const tabId = keys[Number(key)]
  if (!tabId) { return }
  await chrome.tabs.update(tabId, {
    active: true,
  })
}

async function getActiveTab() {
  const [tab] =await tabs.query(({ active: true, currentWindow: true }))
  return tab
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) =>{
  console.log(request)
  if (request.action === 'toggleTab') {
    toggleTab(request.key)
  }
  if (request.action === 'setTab') {
    const tab = await getActiveTab()
    keys[request.key] = tab.id as number
  }
  console.log(keys)
});



// keys定义为数组
function keysSet(index:number, value:number) {
  keys[index] = value
  chrome.storage.local.set({ keys });
}


function getKeys():number[] {
  return deserializer(chrome.storage.local.get(['keys']))
}

// TODO: 更新后重置storage
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({ keys: [] })
// })


tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  tabs.sendMessage(tabId, { action: 'set' }, (response) => {
    console.log(
      `background -> content script infos have been received. number: ${response.number}`
    );
  });
})

chrome.windows.onCreated.addListener(() => {
  let storageKeys = getKeys()
  console.log(storageKeys)
  if (storageKeys) {
    keys = storageKeys
  }
})