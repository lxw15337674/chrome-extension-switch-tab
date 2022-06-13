/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const tabs = chrome.tabs;
const prefixRegEx = /^[0-9]\..*$/;
const getKeys = (cb) => {
    chrome.storage.local.get(['keys'], ({ keys }) => {
        cb(keys || []);
    });
};
function toggleTab(key) {
    getKeys((keys) => __awaiter(this, void 0, void 0, function* () {
        const tabInfo = keys[Number(key)];
        if (!tabInfo) {
            return;
        }
        yield chrome.windows.update(tabInfo.windowId, { focused: true });
        yield chrome.tabs.update(tabInfo.tabId, {
            active: true,
        });
    }));
}
function findKey(windowId, tabId) {
    let index = -1;
    getKeys((keys) => {
        for (let i = 1; i < 10; i++) {
            const tabInfo = keys[i];
            if (tabInfo) {
                if (tabInfo.windowId === windowId && tabInfo.tabId === tabId) {
                    index = i;
                }
            }
        }
    });
    return index;
}
// chrome.runtime.onMessage.addListener(async (request, { tab }, sendResponse) => {
//   if (request.action === 'checkNumber') {
//     const key = findKey(tab?.windowId as number, tab?.id as number)
//     sendResponse(key)
//   }
// });
function setTab(key, tab) {
    return __awaiter(this, void 0, void 0, function* () {
        const window = yield chrome.windows.getCurrent();
        if (tab && window) {
            setTabInfo(key, { tabId: tab.id, windowId: window.id });
        }
    });
}
let time;
// keys定义为数组
function setTabInfo(index, tabInfo) {
    getKeys((keys) => {
        var _a, _b;
        // 如果已存在，则重置被覆盖tab的title
        const tabId = (_b = (_a = keys[index]) === null || _a === void 0 ? void 0 : _a.tabId) !== null && _b !== void 0 ? _b : -1;
        if (tabId > -1) {
            sendClearNumber(tabId);
        }
        // 如果重新编号，则删除之前的编号
        let existedIndex = keys.findIndex((item) => (item === null || item === void 0 ? void 0 : item.tabId) === (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.tabId) && (item === null || item === void 0 ? void 0 : item.windowId) === (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.windowId));
        if (existedIndex >= 0) {
            keys[existedIndex] = undefined;
        }
        keys[index] = tabInfo;
        chrome.storage.local.set({ keys });
        if (tabInfo) {
            sendSetNumber(tabInfo.tabId, index);
            const notificationId = `setTab`;
            chrome.notifications.clear(notificationId);
            clearTimeout(time);
            chrome.notifications.create(notificationId, {
                type: 'basic',
                iconUrl: chrome.runtime.getURL(`icon.png`),
                title: 'set shortcuts Success',
                message: `Set the current tab to N0.${index}`,
                priority: 0,
                silent: true,
            }, (notificationId) => {
                time = setTimeout(function () {
                    chrome.notifications.clear(notificationId);
                }, 3000);
            });
        }
    });
}
const sendSetNumber = (tabId, key) => {
    tabs.sendMessage(tabId, { action: 'setNumber', key });
};
const sendClearNumber = (tabId) => {
    tabs.sendMessage(tabId, { action: 'clearNumber' });
};
const reloadAllTab = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTabs = yield tabs.query({});
    for (let tab of allTabs) {
        if (tab.id) {
            tabs.reload(tab.id);
        }
    }
});
chrome.commands.onCommand.addListener((command, tab) => {
    if (/switch./.test(command)) {
        toggleTab(command[command.length - 1]);
        return;
    }
    if (/set./.test(command)) {
        const number = Number(command[command.length - 1]);
        setTab(number, tab);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZTtBQUN2RTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VFckhEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2l0Y2h0YWIvLi9zcmMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9zd2l0Y2h0YWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zd2l0Y2h0YWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N3aXRjaHRhYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgdGFicyA9IGNocm9tZS50YWJzO1xyXG5jb25zdCBwcmVmaXhSZWdFeCA9IC9eWzAtOV1cXC4uKiQvO1xyXG5jb25zdCBnZXRLZXlzID0gKGNiKSA9PiB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydrZXlzJ10sICh7IGtleXMgfSkgPT4ge1xyXG4gICAgICAgIGNiKGtleXMgfHwgW10pO1xyXG4gICAgfSk7XHJcbn07XHJcbmZ1bmN0aW9uIHRvZ2dsZVRhYihrZXkpIHtcclxuICAgIGdldEtleXMoKGtleXMpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB0YWJJbmZvID0ga2V5c1tOdW1iZXIoa2V5KV07XHJcbiAgICAgICAgaWYgKCF0YWJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgeWllbGQgY2hyb21lLndpbmRvd3MudXBkYXRlKHRhYkluZm8ud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KTtcclxuICAgICAgICB5aWVsZCBjaHJvbWUudGFicy51cGRhdGUodGFiSW5mby50YWJJZCwge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSk7XHJcbn1cclxuZnVuY3Rpb24gZmluZEtleSh3aW5kb3dJZCwgdGFiSWQpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgZ2V0S2V5cygoa2V5cykgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJJbmZvID0ga2V5c1tpXTtcclxuICAgICAgICAgICAgaWYgKHRhYkluZm8pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJJbmZvLndpbmRvd0lkID09PSB3aW5kb3dJZCAmJiB0YWJJbmZvLnRhYklkID09PSB0YWJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG59XHJcbi8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAocmVxdWVzdCwgeyB0YWIgfSwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbi8vICAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnY2hlY2tOdW1iZXInKSB7XHJcbi8vICAgICBjb25zdCBrZXkgPSBmaW5kS2V5KHRhYj8ud2luZG93SWQgYXMgbnVtYmVyLCB0YWI/LmlkIGFzIG51bWJlcilcclxuLy8gICAgIHNlbmRSZXNwb25zZShrZXkpXHJcbi8vICAgfVxyXG4vLyB9KTtcclxuZnVuY3Rpb24gc2V0VGFiKGtleSwgdGFiKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHlpZWxkIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoKTtcclxuICAgICAgICBpZiAodGFiICYmIHdpbmRvdykge1xyXG4gICAgICAgICAgICBzZXRUYWJJbmZvKGtleSwgeyB0YWJJZDogdGFiLmlkLCB3aW5kb3dJZDogd2luZG93LmlkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmxldCB0aW1lO1xyXG4vLyBrZXlz5a6a5LmJ5Li65pWw57uEXHJcbmZ1bmN0aW9uIHNldFRhYkluZm8oaW5kZXgsIHRhYkluZm8pIHtcclxuICAgIGdldEtleXMoKGtleXMpID0+IHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIC8vIOWmguaenOW3suWtmOWcqO+8jOWImemHjee9ruiiq+imhueblnRhYueahHRpdGxlXHJcbiAgICAgICAgY29uc3QgdGFiSWQgPSAoX2IgPSAoX2EgPSBrZXlzW2luZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRhYklkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAtMTtcclxuICAgICAgICBpZiAodGFiSWQgPiAtMSkge1xyXG4gICAgICAgICAgICBzZW5kQ2xlYXJOdW1iZXIodGFiSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzph43mlrDnvJblj7fvvIzliJnliKDpmaTkuYvliY3nmoTnvJblj7dcclxuICAgICAgICBsZXQgZXhpc3RlZEluZGV4ID0ga2V5cy5maW5kSW5kZXgoKGl0ZW0pID0+IChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0udGFiSWQpID09PSAodGFiSW5mbyA9PT0gbnVsbCB8fCB0YWJJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWJJbmZvLnRhYklkKSAmJiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLndpbmRvd0lkKSA9PT0gKHRhYkluZm8gPT09IG51bGwgfHwgdGFiSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFiSW5mby53aW5kb3dJZCkpO1xyXG4gICAgICAgIGlmIChleGlzdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBrZXlzW2V4aXN0ZWRJbmRleF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleXNbaW5kZXhdID0gdGFiSW5mbztcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBrZXlzIH0pO1xyXG4gICAgICAgIGlmICh0YWJJbmZvKSB7XHJcbiAgICAgICAgICAgIHNlbmRTZXROdW1iZXIodGFiSW5mby50YWJJZCwgaW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3RpZmljYXRpb25JZCA9IGBzZXRUYWJgO1xyXG4gICAgICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lKTtcclxuICAgICAgICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFzaWMnLFxyXG4gICAgICAgICAgICAgICAgaWNvblVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKGBpY29uLnBuZ2ApLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXQgc2hvcnRjdXRzIFN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFNldCB0aGUgY3VycmVudCB0YWIgdG8gTjAuJHtpbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBzaWxlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sIChub3RpZmljYXRpb25JZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGltZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBzZW5kU2V0TnVtYmVyID0gKHRhYklkLCBrZXkpID0+IHtcclxuICAgIHRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnc2V0TnVtYmVyJywga2V5IH0pO1xyXG59O1xyXG5jb25zdCBzZW5kQ2xlYXJOdW1iZXIgPSAodGFiSWQpID0+IHtcclxuICAgIHRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnY2xlYXJOdW1iZXInIH0pO1xyXG59O1xyXG5jb25zdCByZWxvYWRBbGxUYWIgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIGNvbnN0IGFsbFRhYnMgPSB5aWVsZCB0YWJzLnF1ZXJ5KHt9KTtcclxuICAgIGZvciAobGV0IHRhYiBvZiBhbGxUYWJzKSB7XHJcbiAgICAgICAgaWYgKHRhYi5pZCkge1xyXG4gICAgICAgICAgICB0YWJzLnJlbG9hZCh0YWIuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbmNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoKGNvbW1hbmQsIHRhYikgPT4ge1xyXG4gICAgaWYgKC9zd2l0Y2guLy50ZXN0KGNvbW1hbmQpKSB7XHJcbiAgICAgICAgdG9nZ2xlVGFiKGNvbW1hbmRbY29tbWFuZC5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKC9zZXQuLy50ZXN0KGNvbW1hbmQpKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGNvbW1hbmRbY29tbWFuZC5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgc2V0VGFiKG51bWJlciwgdGFiKTtcclxuICAgIH1cclxufSk7XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvYmFja2dyb3VuZC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9