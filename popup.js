/* textadkill, Lerie Taylor: 2021,2022 */

let killBtn = document.getElementById("btnKillAds");
let sendBtn = document.getElementById("btnSendUrl");
let txtCurSite = document.getElementById("txtCurSite");

killBtn.addEventListener("click", async () => {
	//kill ads
	//var t = getCurrentTab();
	console.log("click");
});

sendBtn.addEventListener("click", async () => {
	//send current url
});

//https://stackoverflow.com/questions/16791527/can-i-use-a-regular-expression-in-queryselectorall
//var r = DOMRegex(/div[-]gpt[-]ad[-]\d+[-]\d/);
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

function log()
{
	console.log("logging something");
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

function killDivGpt()
{
    //div-gpt-ad-1615231889704-0
    var selectors = [];
    var r = DOMRegex(/div[-]gpt[-]ad[-]\d+[-]\d/);

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

//window.onerror = ignoreerror();
