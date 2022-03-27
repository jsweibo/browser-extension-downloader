chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({
    url: 'extension-downloader/index.html',
  });
});
