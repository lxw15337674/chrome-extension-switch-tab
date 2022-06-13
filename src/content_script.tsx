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
