/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/popup.tsx ***!
  \***********************/

// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// const Popup = () => {
//   const [count, setCount] = useState(0);
//   const [currentURL, setCurrentURL] = useState<string>();
//   useEffect(() => {
//     chrome.action.setBadgeText({ text: count.toString() });
//   }, [count]);
//   useEffect(() => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       setCurrentURL(tabs[0].url);
//     });
//   }, []);
//   const changeBackground = () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       const tab = tabs[0];
//       if (tab.id) {
//         chrome.tabs.sendMessage(
//           tab.id,
//           {
//             color: "#555555",
//           },
//           (msg) => {
//             console.log("result message:", msg);
//           }
//         );
//       }
//     });
//   };
//   return (
//     <>
//       <ul style={{ minWidth: "700px" }}>
//         <li>Current URL: {currentURL}</li>
//         <li>Current Time: {new Date().toLocaleTimeString()}</li>
//       </ul>
//       <button
//         onClick={() => setCount(count + 1)}
//         style={{ marginRight: "5px" }}
//       >
//         count up
//       </button>
//       <button onClick={changeBackground}>change background</button>
//     </>
//   );
// };
// ReactDOM.render(
//   <React.StrictMode>
//     <Popup />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYixtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVELE1BQU07QUFDTjtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQ7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDLDZCQUE2QixXQUFXO0FBQ3hDLDhCQUE4QixnQ0FBZ0M7QUFDOUQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2l0Y2h0YWIvLi9zcmMvcG9wdXAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG4vLyBjb25zdCBQb3B1cCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4vLyAgIGNvbnN0IFtjdXJyZW50VVJMLCBzZXRDdXJyZW50VVJMXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgY2hyb21lLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBjb3VudC50b1N0cmluZygpIH0pO1xyXG4vLyAgIH0sIFtjb3VudF0pO1xyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4vLyAgICAgICBzZXRDdXJyZW50VVJMKHRhYnNbMF0udXJsKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0sIFtdKTtcclxuLy8gICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG4vLyAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuLy8gICAgICAgY29uc3QgdGFiID0gdGFic1swXTtcclxuLy8gICAgICAgaWYgKHRhYi5pZCkge1xyXG4vLyAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxyXG4vLyAgICAgICAgICAgdGFiLmlkLFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogXCIjNTU1NTU1XCIsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgKG1zZykgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBtZXNzYWdlOlwiLCBtc2cpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyAgIH07XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDw+XHJcbi8vICAgICAgIDx1bCBzdHlsZT17eyBtaW5XaWR0aDogXCI3MDBweFwiIH19PlxyXG4vLyAgICAgICAgIDxsaT5DdXJyZW50IFVSTDoge2N1cnJlbnRVUkx9PC9saT5cclxuLy8gICAgICAgICA8bGk+Q3VycmVudCBUaW1lOiB7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L2xpPlxyXG4vLyAgICAgICA8L3VsPlxyXG4vLyAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX1cclxuLy8gICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4vLyAgICAgICA+XHJcbi8vICAgICAgICAgY291bnQgdXBcclxuLy8gICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlQmFja2dyb3VuZH0+Y2hhbmdlIGJhY2tncm91bmQ8L2J1dHRvbj5cclxuLy8gICAgIDwvPlxyXG4vLyAgICk7XHJcbi8vIH07XHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuLy8gICAgIDxQb3B1cCAvPlxyXG4vLyAgIDwvUmVhY3QuU3RyaWN0TW9kZT4sXHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbi8vICk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==