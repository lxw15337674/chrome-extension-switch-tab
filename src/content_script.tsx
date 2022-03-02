let isNum = (v:string) => /^\d+$/.test(v);
const runtime = chrome.runtime

const prefixReg = /^[0-9]\..*$/

const setNumber = (number:number) => {
	if (prefixReg.test(document.title)) {
		if(Number(document.title[0])===number){
			return 
		}
		document.title = `${number}${document.title.slice(1)}`
	} else {
		document.title = `${number}.${document.title}`
	}
}

const clearNumber = ()=>{
	if (prefixReg.test(document.title)) {
		document.title=document.title.slice(2)
	}
}

window.addEventListener('keydown', (e) => {
	const { altKey, ctrlKey, key } = e
	if (ctrlKey && isNum(key)) {
		runtime.sendMessage({ action: 'setTab', key })
		e.preventDefault()
		return 
	}
	if (altKey && isNum(key)) {
		e.preventDefault()
		runtime.sendMessage({ action: 'toggleTab', key })
		return 
	} 
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if(request.action==='setNumber'){
		setNumber(request.key)
	}
	if(request.action ==='clearNumber'){
		clearNumber()
	}
})
