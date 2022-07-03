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
		'#vi-smartbanner',
		'.a-wrap',
		'.adsbyvli',
		'.col-4.main-sidebar.has-sep',
		'.adsbyvli.vliinterstial',
		'.adsbyvli.videoslider',
		'.a-wrap.a-wrap-base.a-wrap-5',
		'.video-ad',
		'.thumb-block.thumb-ad.thumb-nat-ad.no-rotate.tb_full_init',
		'#ad-footer',
		'.game-over-ad-component',
		'.bxc',
		'.celtra-ad-inline-host',
		'.ad ad--epic.ad--desktop2',
		'.ad.ad--epic.ad--desktop',
		'.content-ad-content',
		'.short-sidebar-ad-component.short-sidebar-ad-top',
		'.short-sidebar-ad-component.short-sidebar-ad-bottom',
		'.sidebar-ad',
		'.index-content-ad-wrapper',
		'.col-are-ads.ng-isolate-scope',
		'.uEierd',
		'.ads',
		'.downloadnews',
		'.ezoic-ad',
		'#div-gpt-ad-1387773334918-0',
		'.ezoic-pub-ad-placeholder-109',
		'.ezoic-adpicker-ad',
		'.ezmob-footer.ezoic-floating-bottom.ezo_ad.ezmob-footer-desktop',
		'#rightad',
		'#div-gpt-ad-1387773334918-1'
	];

	ads.forEach((ad) => {
		var adElem = document.querySelector(ad);
		if(adElem) adElem.remove();
	});

	console.log("killing ads");
}

//window.onerror = ignoreerror();
