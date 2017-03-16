// Listens for key command, then activates a popup window
chrome.commands.onCommand.addListener(function(command) {
  var text = prompt("Type a Hermes Command:", "");
  var urlGrab = goToUrl(text);
  if(urlGrab){
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tab) {
      chrome.tabs.update(tab.id, {
        url: urlGrab
      });
    });
  }
  else{
    alert("Error: " + text + " is not a valid Hermes command!");
  }
});

// Simple function that grabs a url from a dictionary
// TODO: Dictionary is stored as an external json (eventually user editable.)
function goToUrl(key) {
    if(key.slice(0,2) == "r/"){
      return "https://reddit.com/r/" + key.slice(2);
    }
    else{
      uDict = {
          "yt": ["https://youtube.com"],
          "re": ["https://reddit.com"],
          "email": ["https://mail.google.com/mail/u/1/#inbox"]
      };
      return uDict[key] ? uDict[key][0] : false;
    }
}
