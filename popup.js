/* textadkill, Lerie Taylor: 2021,2022 */
// popup.js

btnKillAds.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: killAds,
  });

});

function killAds() {
	var ads = [
		'.content-ad-content',
		'.short-sidebar-ad-component.short-sidebar-ad-top',
		'.short-sidebar-ad-component.short-sidebar-ad-bottom',
		'.sidebar-ad',
		'.index-content-ad-wrapper',
		'.col-are-ads.ng-isolate-scope'
	];

	ads.forEach((ad) => {
		var adElem = document.querySelector(ad);
		if(adElem) adElem.remove();
	});

	console.log("killing ads");
}

//window.onerror = ignoreerror();
