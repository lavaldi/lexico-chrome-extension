chrome.omnibox.onInputEntered.addListener(function(text) {
  var newURL =
    "https://www.lexico.com/en/definition/" + encodeURIComponent(text);
  chrome.tabs.update({ url: newURL });
});
