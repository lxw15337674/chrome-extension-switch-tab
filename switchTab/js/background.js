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
chrome.runtime.onMessage.addListener((request, { tab }, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.action === 'checkNumber') {
        const key = findKey(tab === null || tab === void 0 ? void 0 : tab.windowId, tab === null || tab === void 0 ? void 0 : tab.id);
        sendResponse(key);
    }
}));
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
        let existedIndex = keys.findIndex(item => (item === null || item === void 0 ? void 0 : item.tabId) === (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.tabId) && (item === null || item === void 0 ? void 0 : item.windowId) === (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.windowId));
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
                silent: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZTtBQUN2RTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxNQUFNO0FBQzVEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VFckhEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2l0Y2h0YWIvLi9zcmMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9zd2l0Y2h0YWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zd2l0Y2h0YWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N3aXRjaHRhYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgdGFicyA9IGNocm9tZS50YWJzO1xyXG5jb25zdCBwcmVmaXhSZWdFeCA9IC9eWzAtOV1cXC4uKiQvO1xyXG5jb25zdCBnZXRLZXlzID0gKGNiKSA9PiB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydrZXlzJ10sICh7IGtleXMgfSkgPT4ge1xyXG4gICAgICAgIGNiKGtleXMgfHwgW10pO1xyXG4gICAgfSk7XHJcbn07XHJcbmZ1bmN0aW9uIHRvZ2dsZVRhYihrZXkpIHtcclxuICAgIGdldEtleXMoKGtleXMpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB0YWJJbmZvID0ga2V5c1tOdW1iZXIoa2V5KV07XHJcbiAgICAgICAgaWYgKCF0YWJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgeWllbGQgY2hyb21lLndpbmRvd3MudXBkYXRlKHRhYkluZm8ud2luZG93SWQsIHsgZm9jdXNlZDogdHJ1ZSB9KTtcclxuICAgICAgICB5aWVsZCBjaHJvbWUudGFicy51cGRhdGUodGFiSW5mby50YWJJZCwge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSk7XHJcbn1cclxuZnVuY3Rpb24gZmluZEtleSh3aW5kb3dJZCwgdGFiSWQpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgZ2V0S2V5cygoa2V5cykgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJJbmZvID0ga2V5c1tpXTtcclxuICAgICAgICAgICAgaWYgKHRhYkluZm8pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJJbmZvLndpbmRvd0lkID09PSB3aW5kb3dJZCAmJiB0YWJJbmZvLnRhYklkID09PSB0YWJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG59XHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgeyB0YWIgfSwgc2VuZFJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ2NoZWNrTnVtYmVyJykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGZpbmRLZXkodGFiID09PSBudWxsIHx8IHRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFiLndpbmRvd0lkLCB0YWIgPT09IG51bGwgfHwgdGFiID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWIuaWQpO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZShrZXkpO1xyXG4gICAgfVxyXG59KSk7XHJcbmZ1bmN0aW9uIHNldFRhYihrZXksIHRhYikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB3aW5kb3cgPSB5aWVsZCBjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KCk7XHJcbiAgICAgICAgaWYgKHRhYiAmJiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgc2V0VGFiSW5mbyhrZXksIHsgdGFiSWQ6IHRhYi5pZCwgd2luZG93SWQ6IHdpbmRvdy5pZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5sZXQgdGltZTtcclxuLy8ga2V5c+WumuS5ieS4uuaVsOe7hFxyXG5mdW5jdGlvbiBzZXRUYWJJbmZvKGluZGV4LCB0YWJJbmZvKSB7XHJcbiAgICBnZXRLZXlzKChrZXlzKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAvLyDlpoLmnpzlt7LlrZjlnKjvvIzliJnph43nva7ooqvopobnm5Z0YWLnmoR0aXRsZVxyXG4gICAgICAgIGNvbnN0IHRhYklkID0gKF9iID0gKF9hID0ga2V5c1tpbmRleF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50YWJJZCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogLTE7XHJcbiAgICAgICAgaWYgKHRhYklkID4gLTEpIHtcclxuICAgICAgICAgICAgc2VuZENsZWFyTnVtYmVyKHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6YeN5paw57yW5Y+377yM5YiZ5Yig6Zmk5LmL5YmN55qE57yW5Y+3XHJcbiAgICAgICAgbGV0IGV4aXN0ZWRJbmRleCA9IGtleXMuZmluZEluZGV4KGl0ZW0gPT4gKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS50YWJJZCkgPT09ICh0YWJJbmZvID09PSBudWxsIHx8IHRhYkluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYkluZm8udGFiSWQpICYmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0ud2luZG93SWQpID09PSAodGFiSW5mbyA9PT0gbnVsbCB8fCB0YWJJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWJJbmZvLndpbmRvd0lkKSk7XHJcbiAgICAgICAgaWYgKGV4aXN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGtleXNbZXhpc3RlZEluZGV4XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5c1tpbmRleF0gPSB0YWJJbmZvO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGtleXMgfSk7XHJcbiAgICAgICAgaWYgKHRhYkluZm8pIHtcclxuICAgICAgICAgICAgc2VuZFNldE51bWJlcih0YWJJbmZvLnRhYklkLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbklkID0gYHNldFRhYmA7XHJcbiAgICAgICAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xyXG4gICAgICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uSWQsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXNpYycsXHJcbiAgICAgICAgICAgICAgICBpY29uVXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoYGljb24ucG5nYCksXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3NldCBzaG9ydGN1dHMgU3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU2V0IHRoZSBjdXJyZW50IHRhYiB0byBOMC4ke2luZGV4fWAsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogMCxcclxuICAgICAgICAgICAgICAgIHNpbGVudDogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAobm90aWZpY2F0aW9uSWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuY29uc3Qgc2VuZFNldE51bWJlciA9ICh0YWJJZCwga2V5KSA9PiB7XHJcbiAgICB0YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogJ3NldE51bWJlcicsIGtleSB9KTtcclxufTtcclxuY29uc3Qgc2VuZENsZWFyTnVtYmVyID0gKHRhYklkKSA9PiB7XHJcbiAgICB0YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogJ2NsZWFyTnVtYmVyJyB9KTtcclxufTtcclxuY29uc3QgcmVsb2FkQWxsVGFiID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBhbGxUYWJzID0geWllbGQgdGFicy5xdWVyeSh7fSk7XHJcbiAgICBmb3IgKGxldCB0YWIgb2YgYWxsVGFicykge1xyXG4gICAgICAgIGlmICh0YWIuaWQpIHtcclxuICAgICAgICAgICAgdGFicy5yZWxvYWQodGFiLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5jaHJvbWUuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKChjb21tYW5kLCB0YWIpID0+IHtcclxuICAgIGlmICgvc3dpdGNoLi8udGVzdChjb21tYW5kKSkge1xyXG4gICAgICAgIHRvZ2dsZVRhYihjb21tYW5kW2NvbW1hbmQubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgvc2V0Li8udGVzdChjb21tYW5kKSkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IE51bWJlcihjb21tYW5kW2NvbW1hbmQubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIHNldFRhYihudW1iZXIsIHRhYik7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2JhY2tncm91bmQudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==