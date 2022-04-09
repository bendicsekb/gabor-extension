
let clicks = 0

async function onWindowClick() {

    clicks += 1
    if (clicks % 3 == 0) {
        chrome.runtime.sendMessage({openNewWindow: true});
    }
}

document.addEventListener("click", onWindowClick, false);