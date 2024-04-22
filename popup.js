// popup.js

document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('openButton');

  openButton.addEventListener('click', function() {
    const keywordsInput = document.getElementById('keywordsInput').value;
    const keywords = keywordsInput.split(',');
    chrome.runtime.sendMessage({ action: 'openTabs', keywords });
  });
});
