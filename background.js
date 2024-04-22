// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openTabs") {
    const { keywords } = message;
    keywords.forEach(keyword => {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(keyword)}`;
      chrome.tabs.create({ url: searchUrl });
    });
  }
});
