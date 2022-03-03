/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/content_script.tsx ***!
  \********************************/

let isNum = (v) => /^\d+$/.test(v);
const runtime = chrome.runtime;
const prefixReg = /^[0-9]\..*$/;
const setNumber = (number) => {
    if (prefixReg.test(document.title)) {
        if (Number(document.title[0]) === number) {
            return;
        }
        document.title = `${number}${document.title.slice(1)}`;
    }
    else {
        document.title = `${number}.${document.title}`;
    }
};
const clearNumber = () => {
    if (prefixReg.test(document.title)) {
        document.title = document.title.slice(2);
    }
};
runtime.onMessage.addListener((request) => {
    if (request.action === 'setNumber') {
        setNumber(request.key);
    }
    if (request.action === 'clearNumber') {
        clearNumber();
    }
});
const checkNumber = () => {
    runtime.sendMessage({ action: 'checkNumber' }, (key) => {
        if (key > 0) {
            setNumber(key);
        }
    });
};
const keepMarked = () => {
    checkNumber();
    // 保持tab的标记
    const target = document.querySelector('title');
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function () {
            checkNumber();
        });
    });
    const config = {
        childList: true,
    };
    observer.observe(target, config);
};
keepMarked();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU8sRUFBRSx3QkFBd0I7QUFDN0Q7QUFDQTtBQUNBLDRCQUE0QixPQUFPLEdBQUcsZUFBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMEJBQTBCLHVCQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dpdGNodGFiLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxubGV0IGlzTnVtID0gKHYpID0+IC9eXFxkKyQvLnRlc3Qodik7XHJcbmNvbnN0IHJ1bnRpbWUgPSBjaHJvbWUucnVudGltZTtcclxuY29uc3QgcHJlZml4UmVnID0gL15bMC05XVxcLi4qJC87XHJcbmNvbnN0IHNldE51bWJlciA9IChudW1iZXIpID0+IHtcclxuICAgIGlmIChwcmVmaXhSZWcudGVzdChkb2N1bWVudC50aXRsZSkpIHtcclxuICAgICAgICBpZiAoTnVtYmVyKGRvY3VtZW50LnRpdGxlWzBdKSA9PT0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgJHtudW1iZXJ9JHtkb2N1bWVudC50aXRsZS5zbGljZSgxKX1gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgJHtudW1iZXJ9LiR7ZG9jdW1lbnQudGl0bGV9YDtcclxuICAgIH1cclxufTtcclxuY29uc3QgY2xlYXJOdW1iZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJlZml4UmVnLnRlc3QoZG9jdW1lbnQudGl0bGUpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBkb2N1bWVudC50aXRsZS5zbGljZSgyKTtcclxuICAgIH1cclxufTtcclxucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QpID0+IHtcclxuICAgIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3NldE51bWJlcicpIHtcclxuICAgICAgICBzZXROdW1iZXIocmVxdWVzdC5rZXkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnY2xlYXJOdW1iZXInKSB7XHJcbiAgICAgICAgY2xlYXJOdW1iZXIoKTtcclxuICAgIH1cclxufSk7XHJcbmNvbnN0IGNoZWNrTnVtYmVyID0gKCkgPT4ge1xyXG4gICAgcnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NoZWNrTnVtYmVyJyB9LCAoa2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA+IDApIHtcclxuICAgICAgICAgICAgc2V0TnVtYmVyKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGtlZXBNYXJrZWQgPSAoKSA9PiB7XHJcbiAgICBjaGVja051bWJlcigpO1xyXG4gICAgLy8g5L+d5oyBdGFi55qE5qCH6K6wXHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjaGVja051bWJlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgfTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG59O1xyXG5rZWVwTWFya2VkKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==