/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/content_script.tsx ***!
  \********************************/

// let isNum = (v: string) => /^\d+$/.test(v);
// const runtime = chrome.runtime;
// const prefixReg = /^[0-9]\..*$/;
// const setNumber = (number: number) => {
//   if (prefixReg.test(document.title)) {
//     if (Number(document.title[0]) === number) {
//       return;
//     }
//     document.title = `${number}${document.title.slice(1)}`;
//   } else {
//     document.title = `${number}.${document.title}`;
//   }
// };
// const clearNumber = () => {
//   if (prefixReg.test(document.title)) {
//     document.title = document.title.slice(2);
//   }
// };
// runtime.onMessage.addListener((request) => {
//   if (request.action === 'setNumber') {
//     setNumber(request.key);
//   }
//   if (request.action === 'clearNumber') {
//     clearNumber();
//   }
// });
// const checkNumber = () => {
//   runtime.sendMessage({ action: 'checkNumber' }, (key) => {
//     if (key > 0) {
//       setNumber(key);
//     }
//   });
// };
// const keepMarked = () => {
//   checkNumber();
//   // 保持tab的标记
//   const target = document.querySelector('title') as HTMLTitleElement;
//   const observer = new MutationObserver(function (mutations) {
//     mutations.forEach(function () {
//       checkNumber();
//     });
//   });
//   const config = {
//     childList: true,
//   };
//   observer.observe(target, config);
// };
// keepMarked();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU8sRUFBRSx3QkFBd0I7QUFDNUQsT0FBTztBQUNQLDJCQUEyQixPQUFPLEdBQUcsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dpdGNodGFiLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gbGV0IGlzTnVtID0gKHY6IHN0cmluZykgPT4gL15cXGQrJC8udGVzdCh2KTtcclxuLy8gY29uc3QgcnVudGltZSA9IGNocm9tZS5ydW50aW1lO1xyXG4vLyBjb25zdCBwcmVmaXhSZWcgPSAvXlswLTldXFwuLiokLztcclxuLy8gY29uc3Qgc2V0TnVtYmVyID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XHJcbi8vICAgaWYgKHByZWZpeFJlZy50ZXN0KGRvY3VtZW50LnRpdGxlKSkge1xyXG4vLyAgICAgaWYgKE51bWJlcihkb2N1bWVudC50aXRsZVswXSkgPT09IG51bWJlcikge1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcbi8vICAgICBkb2N1bWVudC50aXRsZSA9IGAke251bWJlcn0ke2RvY3VtZW50LnRpdGxlLnNsaWNlKDEpfWA7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGRvY3VtZW50LnRpdGxlID0gYCR7bnVtYmVyfS4ke2RvY3VtZW50LnRpdGxlfWA7XHJcbi8vICAgfVxyXG4vLyB9O1xyXG4vLyBjb25zdCBjbGVhck51bWJlciA9ICgpID0+IHtcclxuLy8gICBpZiAocHJlZml4UmVnLnRlc3QoZG9jdW1lbnQudGl0bGUpKSB7XHJcbi8vICAgICBkb2N1bWVudC50aXRsZSA9IGRvY3VtZW50LnRpdGxlLnNsaWNlKDIpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuLy8gcnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QpID0+IHtcclxuLy8gICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdzZXROdW1iZXInKSB7XHJcbi8vICAgICBzZXROdW1iZXIocmVxdWVzdC5rZXkpO1xyXG4vLyAgIH1cclxuLy8gICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdjbGVhck51bWJlcicpIHtcclxuLy8gICAgIGNsZWFyTnVtYmVyKCk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuLy8gY29uc3QgY2hlY2tOdW1iZXIgPSAoKSA9PiB7XHJcbi8vICAgcnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NoZWNrTnVtYmVyJyB9LCAoa2V5KSA9PiB7XHJcbi8vICAgICBpZiAoa2V5ID4gMCkge1xyXG4vLyAgICAgICBzZXROdW1iZXIoa2V5KTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuLy8gfTtcclxuLy8gY29uc3Qga2VlcE1hcmtlZCA9ICgpID0+IHtcclxuLy8gICBjaGVja051bWJlcigpO1xyXG4vLyAgIC8vIOS/neaMgXRhYueahOagh+iusFxyXG4vLyAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykgYXMgSFRNTFRpdGxlRWxlbWVudDtcclxuLy8gICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuLy8gICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgY2hlY2tOdW1iZXIoKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyAgIGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuLy8gICB9O1xyXG4vLyAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4vLyB9O1xyXG4vLyBrZWVwTWFya2VkKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==