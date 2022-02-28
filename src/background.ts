const tabs = chrome.tabs
const prefixRegEx = /^[0-9]\..*$/


let keys:number[] = []


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
  if (request.action === 'toggleTab') {
    toggleTab(request.key)
  }
  if (request.action === 'setTab') {
    const tab = await getActiveTab()
    keysSet(request.key,tab.id as number)
  }
});



// keys定义为数组
function keysSet(index:number, tabId:number) {
  // 如果已存在，则重置被覆盖tab的title
  if(keys[index]){
    sendClearNumber(keys[index])
  }
  keys[index] = tabId
  sendSetNumber(tabId,index)
  // chrome.storage.local.set({ keys });
}

const sendSetNumber= (tabId:number,key:number)=>{
  tabs.sendMessage(tabId, { action: 'setNumber',key})
}

const sendClearNumber=(tabId:number)=>{
  tabs.sendMessage(tabId, { action: 'clearNumber'})
}

// TODO: 更新后重置storage
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({ keys: [] })
// })

// 保持tab始终标记
// tabs.onUpdated.addListener(function (tabId) {
//   const key = keys.findIndex(item=>item===tabId)
//   if(key!==-1){
//    tabs.sendMessage(tabId, { action: 'setNumber',key})
//   }
// })

// chrome.windows.onCreated.addListener(() => {
//   chrome.tabs.query({}, (tab)=>{
//     console.log(tab)
//   })
  
//   chrome.storage.local.get(['keys'],(v)=>{
//     keys= v.keys
//     keys.forEach((tabId,index)=>{
//       if(tabId){
//       tabs.sendMessage(tabId, { action: 'setNumber',index})
//       }
//     })
//   })
  
// })


