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
// keys定义为数组
function setTabInfo(index, tabInfo) {
    getKeys((keys) => {
        var _a, _b;
        // 如果已存在，则重置被覆盖tab的title
        const tabId = (_a = keys[index]) === null || _a === void 0 ? void 0 : _a.tabId;
        if (tabId) {
            sendClearNumber(tabId);
        }
        // 如果重新编号，则删除之前的编号
        let existedIndex = keys.findIndex(item => (item === null || item === void 0 ? void 0 : item.tabId) === (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.tabId) && (item === null || item === void 0 ? void 0 : item.windowId) === (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.windowId));
        if (existedIndex >= 0) {
            const tabId = (_b = keys[existedIndex]) === null || _b === void 0 ? void 0 : _b.tabId;
            sendClearNumber(tabId);
            keys[existedIndex] = undefined;
        }
        keys[index] = tabInfo;
        chrome.storage.local.set({ keys });
        if (tabInfo) {
            sendSetNumber(tabInfo.tabId, index);
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
        chrome.notifications.clear('setTab');
        chrome.notifications.create('setTab', {
            type: 'basic',
            iconUrl: chrome.runtime.getURL(`icon.png`),
            title: '设置成功',
            message: `设置当前标签页为${number}`,
            priority: 0,
            silent: true
        }, (notificationId) => {
            setTimeout(function () {
                chrome.notifications.clear(notificationId);
            }, 2000);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZTtBQUN2RTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw4QkFBOEIsMEJBQTBCO0FBQ3hEO0FBQ0E7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVRXBIRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dpdGNodGFiLy4vc3JjL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vc3dpdGNodGFiL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3dpdGNodGFiL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zd2l0Y2h0YWIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IHRhYnMgPSBjaHJvbWUudGFicztcclxuY29uc3QgcHJlZml4UmVnRXggPSAvXlswLTldXFwuLiokLztcclxuY29uc3QgZ2V0S2V5cyA9IChjYikgPT4ge1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsna2V5cyddLCAoeyBrZXlzIH0pID0+IHtcclxuICAgICAgICBjYihrZXlzIHx8IFtdKTtcclxuICAgIH0pO1xyXG59O1xyXG5mdW5jdGlvbiB0b2dnbGVUYWIoa2V5KSB7XHJcbiAgICBnZXRLZXlzKChrZXlzKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgdGFiSW5mbyA9IGtleXNbTnVtYmVyKGtleSldO1xyXG4gICAgICAgIGlmICghdGFiSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHlpZWxkIGNocm9tZS53aW5kb3dzLnVwZGF0ZSh0YWJJbmZvLndpbmRvd0lkLCB7IGZvY3VzZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgeWllbGQgY2hyb21lLnRhYnMudXBkYXRlKHRhYkluZm8udGFiSWQsIHtcclxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRLZXkod2luZG93SWQsIHRhYklkKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGdldEtleXMoKGtleXMpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFiSW5mbyA9IGtleXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0YWJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFiSW5mby53aW5kb3dJZCA9PT0gd2luZG93SWQgJiYgdGFiSW5mby50YWJJZCA9PT0gdGFiSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleDtcclxufVxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHsgdGFiIH0sIHNlbmRSZXNwb25zZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdjaGVja051bWJlcicpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBmaW5kS2V5KHRhYiA9PT0gbnVsbCB8fCB0YWIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYi53aW5kb3dJZCwgdGFiID09PSBudWxsIHx8IHRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFiLmlkKTtcclxuICAgICAgICBzZW5kUmVzcG9uc2Uoa2V5KTtcclxuICAgIH1cclxufSkpO1xyXG5mdW5jdGlvbiBzZXRUYWIoa2V5LCB0YWIpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0geWllbGQgY2hyb21lLndpbmRvd3MuZ2V0Q3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0YWIgJiYgd2luZG93KSB7XHJcbiAgICAgICAgICAgIHNldFRhYkluZm8oa2V5LCB7IHRhYklkOiB0YWIuaWQsIHdpbmRvd0lkOiB3aW5kb3cuaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8ga2V5c+WumuS5ieS4uuaVsOe7hFxyXG5mdW5jdGlvbiBzZXRUYWJJbmZvKGluZGV4LCB0YWJJbmZvKSB7XHJcbiAgICBnZXRLZXlzKChrZXlzKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAvLyDlpoLmnpzlt7LlrZjlnKjvvIzliJnph43nva7ooqvopobnm5Z0YWLnmoR0aXRsZVxyXG4gICAgICAgIGNvbnN0IHRhYklkID0gKF9hID0ga2V5c1tpbmRleF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50YWJJZDtcclxuICAgICAgICBpZiAodGFiSWQpIHtcclxuICAgICAgICAgICAgc2VuZENsZWFyTnVtYmVyKHRhYklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6YeN5paw57yW5Y+377yM5YiZ5Yig6Zmk5LmL5YmN55qE57yW5Y+3XHJcbiAgICAgICAgbGV0IGV4aXN0ZWRJbmRleCA9IGtleXMuZmluZEluZGV4KGl0ZW0gPT4gKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS50YWJJZCkgPT09ICh0YWJJbmZvID09PSBudWxsIHx8IHRhYkluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYkluZm8udGFiSWQpICYmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0ud2luZG93SWQpID09PSAodGFiSW5mbyA9PT0gbnVsbCB8fCB0YWJJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWJJbmZvLndpbmRvd0lkKSk7XHJcbiAgICAgICAgaWYgKGV4aXN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYklkID0gKF9iID0ga2V5c1tleGlzdGVkSW5kZXhdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGFiSWQ7XHJcbiAgICAgICAgICAgIHNlbmRDbGVhck51bWJlcih0YWJJZCk7XHJcbiAgICAgICAgICAgIGtleXNbZXhpc3RlZEluZGV4XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5c1tpbmRleF0gPSB0YWJJbmZvO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGtleXMgfSk7XHJcbiAgICAgICAgaWYgKHRhYkluZm8pIHtcclxuICAgICAgICAgICAgc2VuZFNldE51bWJlcih0YWJJbmZvLnRhYklkLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuY29uc3Qgc2VuZFNldE51bWJlciA9ICh0YWJJZCwga2V5KSA9PiB7XHJcbiAgICB0YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogJ3NldE51bWJlcicsIGtleSB9KTtcclxufTtcclxuY29uc3Qgc2VuZENsZWFyTnVtYmVyID0gKHRhYklkKSA9PiB7XHJcbiAgICB0YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogJ2NsZWFyTnVtYmVyJyB9KTtcclxufTtcclxuY29uc3QgcmVsb2FkQWxsVGFiID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBhbGxUYWJzID0geWllbGQgdGFicy5xdWVyeSh7fSk7XHJcbiAgICBmb3IgKGxldCB0YWIgb2YgYWxsVGFicykge1xyXG4gICAgICAgIGlmICh0YWIuaWQpIHtcclxuICAgICAgICAgICAgdGFicy5yZWxvYWQodGFiLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5jaHJvbWUuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKChjb21tYW5kLCB0YWIpID0+IHtcclxuICAgIGlmICgvc3dpdGNoLi8udGVzdChjb21tYW5kKSkge1xyXG4gICAgICAgIHRvZ2dsZVRhYihjb21tYW5kW2NvbW1hbmQubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgvc2V0Li8udGVzdChjb21tYW5kKSkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IE51bWJlcihjb21tYW5kW2NvbW1hbmQubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKCdzZXRUYWInKTtcclxuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoJ3NldFRhYicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgaWNvblVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKGBpY29uLnBuZ2ApLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+iuvue9ruaIkOWKnycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDorr7nva7lvZPliY3moIfnrb7pobXkuLoke251bWJlcn1gLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogMCxcclxuICAgICAgICAgICAgc2lsZW50OiB0cnVlXHJcbiAgICAgICAgfSwgKG5vdGlmaWNhdGlvbklkKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY2xlYXIobm90aWZpY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUYWIobnVtYmVyLCB0YWIpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9iYWNrZ3JvdW5kLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=