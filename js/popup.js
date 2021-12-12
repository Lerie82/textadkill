/*
Lerie Taylor 2021,2022
lerietaylor.com
*/

let killBtn = document.getElementById("btnKillAds");
/*let supportBtn = document.getElementById("btnSupport");*/
let txtCurSite = document.getElementById("txtCurSite");

killBtn.addEventListener("click", async () => {
    killDivGpt();

    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    txtCurSite.value = tab.url;

    if(tab.url.includes("chess.com"))
    {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killChessAds,
        });
    }


    if(tab.url.includes("pof.com"))
    {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killPofAds,
        });
    }

    if(tab.url.includes("bloomberg.com"))
    {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killBloomberg,
        });
    }

    if (tab.url.includes("pornhub")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killPornHubAds,
        });
    }

    if (tab.url.includes("tutorialspoint")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killTPAds,
        });
    }

    if(tab.url.includes("fandom.com"))
    {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killFandomAds,
        });
    }

    if (tab.url.includes("torrentgalaxy")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killTGAds,
        });
    }

    if (tab.url.includes("origami")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killOrigamiAds,
        });
    }

    /*if (tab.url.includes("stonewallinstitute")) {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                checkpointIds = [];
                progressTime += 9999999;
            }
        };
    }*/

    if (tab.url.includes("textnow")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killTextnowAds,
        });
    }

    if (tab.url.includes("textfree")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killTextFreeAds,
        });
    }

    if (tab.url.includes("genius")) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: killLyricsAds,
        });
    }
});

//https://stackoverflow.com/questions/16791527/can-i-use-a-regular-expression-in-queryselectorall
function DOMRegex(regex) {
    let output = [];
    for (let i of document.querySelectorAll('*')) {
        for (let j of i.attributes) {
            if (regex.test(j.value)) {
                output.push({
                    'element': i,
                    'attribute name': j.name,
                    'attribute value': j.value
                });
            }
        }
    }
    return output;
}

function killPofAds() {
    document.querySelector(".css-16rssz5").remove();
    document.querySelector(".css-1yjr9ye").remove();
    document.querySelector(".css-1e6y1xp").remove();
}

function killChessAds()
{
    document.querySelector("#google-right-ads").remove();
}

function killTPAds()
{
    document.querySelector("#google-right-ads").remove();
    document.querySelector("#google-top-ads").remove();
    document.querySelector("#ad_unit").remove();
    document.querySelector("#google-bottom-ads").remove();
    document.querySelector("#sticky-ad").remove();
}

function killBloomberg()
{
    document.querySelector("#fortress-paywall-container-root").remove();
    document.querySelector("#plug-banner-outlet").remove();
    document.querySelector(".trc_rbox_container").remove();
    document.querySelector("aside.right-rail").remove();
    document.querySelector("#viewport").remove();
}

function killTGAds()
{
    //overlay
    document.body.className = document.body.className.replace("txlight","");

    //
    document.querySelectorAll("iframe")[2].remove();
    document.querySelector("#AdskeeperComposite385455").remove();
    document.querySelector("#panelmain").remove();
}

function killFandomAds()
{
    document.querySelector("#ds_cpp").remove();
    document.querySelector(".page__right-rail").remove();
    document.querySelector(".mcf-wrapper").remove();
    document.querySelector(".bottom-ads-container").remove();
    document.querySelector(".ad-slot-placeholder").remove();
    document.querySelector(".notifications-placeholder").remove();
}

function killDivGpt()
{
    //div-gpt-ad-1615231889704-0
    var r = DOMRegex(/div[-]gpt[-]ad[-]\d+[-]\d/);
    var selectors = [];

    r.forEach(element => {
        selectors.push(element.id);
    });

    selectors.forEach((x, i) => {
        const a = document.querySelector(x);

        if (a !== null) {
            a.parentElement.removeChild(a);
        }
    });
}

function killPornHubAds() {

    var thumbads = document.querySelectorAll('.thumb-ad');
    thumbads.forEach((x, i) => {
        //
    });

    var selectors = [];

    selectors.forEach((x, i) => {
        const a = document.querySelector(x);

        if (a !== null) {
            a.parentElement.removeChild(a);
        }
    });
}


function killOrigamiAds() {

    var iframes = document.querySelectorAll('iframe');
    iframes.forEach((x, i) => {
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

        if (a !== null) {
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