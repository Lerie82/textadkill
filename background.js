/*
Lerie Taylor 2021,2022
lerietaylor.com
*/

chrome.runtime.onInstalled.addListener(() => {
  console.log("textadkill loaded");
});

chrome.webNavigation.onBeforeNavigate.addListener(logOnBefore);

function logOnBefore(details) {
  console.log(`onBeforeNavigate to: ${details.url}`);
}
