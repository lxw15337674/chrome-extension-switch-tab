let isNum = (v:string) => /^\d+$/.test(v);
const runtime = chrome.runtime


const prefixReg = /^[0-9]\..*$/

const setNumber = (number:number) => {
	if (prefixReg.test(document.title)) {
		document.title = `${number}${document.title.slice(1)}`
	} else {
		document.title = `${number}.${document.title}`
	}
}


window.addEventListener('keydown', (e) => {
	const { altKey, ctrlKey, key } = e
	if (altKey && isNum(key)) {
		e.preventDefault()
		runtime.sendMessage({ action: 'toggleTab', key })
	} if (ctrlKey && isNum(key)) {
		runtime.sendMessage({ action: 'setTab', key }, () => {
			setNumber(Number(key))
		})
		e.preventDefault()
	}
})





chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender, sendResponse)
})