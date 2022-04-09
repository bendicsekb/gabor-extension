// source: https://stackoverflow.com/questions/28799892/how-to-launch-a-new-window-in-google-chrome-extension
let clicks = 0

async function onWindowClick() {

  clicks += 1
  if(clicks % 3 == 0){
    chrome.tabs.create({
        // Just use the full URL if you need to open an external page
        url: chrome.runtime.getURL("index.html")
      });
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if(request.openNewWindow){
      chrome.tabs.create({
        // Just use the full URL if you need to open an external page
        url: chrome.runtime.getURL("index.html")
    });
    }
  }
);