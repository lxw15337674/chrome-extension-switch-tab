const tabs = chrome.tabs
const prefixRegEx = /^[0-9]\..*$/

interface TabInfo{
  windowId:number,
  tabId:number
}
let keys:(TabInfo|undefined)[] = []


async function toggleTab(key:string|number) {
  const tabInfo = keys[Number(key)]
  if(!tabInfo){
    return 
  }
  await chrome.windows.update(tabInfo.windowId,{focused:true})
  await chrome.tabs.update(tabInfo.tabId, {
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
    setTab(request.key)
  }
});

async function setTab(key:number){
  const tab = await getActiveTab()
  const window  =await  chrome.windows.getCurrent()
  if(tab&&window){
  keysSet(key,{tabId:tab.id as number,windowId:window.id as number})
  }
}


// keys定义为数组
function keysSet(index:number, tabInfo:TabInfo) {
  // 如果已存在，则重置被覆盖tab的title
  const tabId =keys[index]?.tabId
  if(tabId){
    sendClearNumber(tabId)
  }
  // 如果重新编号，则删除之前的编号
  let existedIndex = keys.findIndex(item=>item?.tabId===tabInfo.tabId&&item?.windowId===tabInfo.windowId)
  if(existedIndex>=0){
    const tabId = keys[existedIndex]?.tabId as number
    sendClearNumber(tabId)
    keys[existedIndex] = undefined
  }
  keys[index]=tabInfo
  sendSetNumber(tabInfo.tabId,index)
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
//     
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

const reloadAllTab = async ()=>{
  const allTabs = await tabs.query({})
  for(let tab of allTabs){
    if(tab.id){
  tabs.reload(tab.id)
    }
  }
}

chrome.runtime.onInstalled.addListener( ()=>{
  reloadAllTab()
})


chrome.commands.onCommand.addListener((command,tab) => {
  switch (command){
    case 'switch1':
      toggleTab(1)
      break;
    case 'switch2':
      toggleTab(2)
      break
    case 'set1':
      setTab(1)
      break
    case 'set2':
      setTab(2)
      break
  }
  
});
