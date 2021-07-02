let killBtn = document.getElementById("btnKillAds");


killBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });


  if(tab.url.includes("origami"))
   {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: killOrigamiAds,
    });
  }

if(tab.url.includes("stonewallinstitute"))
   {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        checkpointIds=[];
        progressTime += 9999999;
      }
    };
  }

  if(tab.url.includes("textnow"))
   {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: killTextnowAds,
    });
  }

  if(tab.url.includes("textfree"))
  {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: killTextFreeAds,
    });
  }

  if(tab.url.includes("genius"))
  {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: killLyricsAds,
    });
  }
});


function killOrigamiAds() {

  var iframes = document.querySelectorAll('iframe');
  iframes.forEach((x,i) => {
    iframes[i].parentNode.removeChild(iframes[i]);
  });

  var selectors = [
  "#animation_container",
  "#IL_INSEARCH",
  ".IL_INSEARCH",
  "#aswift_0_expand",
  "#aswift_1_expand",
  ".gg-static-content",
  ".gg-static-housing",
  ".ima-sdk-frame",
  ".gg-static-unit",
  "#gg-static-unit"
  ];

  selectors.forEach((x, i) => {
    const a = document.querySelector(x);

    if(a !== null)
      {
        a.parentElement.removeChild(a);
      }
  });
}

function killTextFreeAds() {
  const a = document.querySelector(".col-are-ads");
  a.parentElement.removeChild(a);
}

function killTextnowAds() {
  const a = document.querySelector(".rotation-manager-slot-wrapper");
  a.parentElement.removeChild(a);

  const b = document.querySelector(".rotation-manager-slot");
  b.parentElement.removeChild(b);

  const c = document.querySelector(".a2 a2-frame");
  c.parentElement.removeChild(c);
}

function killLyricsAds() {
  const a = document.querySelector(".LeaderboardOrMarquee__Sticky-yjd3i4-0");
  a.parentElement.removeChild(a);

  const b = document.querySelector(".eGLQob");
  b.parentElement.removeChild(b);

  const c = document.querySelector(".InreadAd__Container-sc-1pp8jgt-0");
  c.parentElement.removeChild(c);

  const d = document.querySelector(".SectionLeaderboard__Container-sc-1pjk0bw-0");
  d.parentElement.removeChild(d);
}

function ignoreerror() {
  return true;
}

window.onerror = ignoreerror();