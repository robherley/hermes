// Listener for development
chrome.omnibox.onInputChanged.addListener(
    function(text, suggest) {
        console.log('Entered Text: ' + text);
    });

// Listener Event for Input.
chrome.omnibox.onInputEntered.addListener(
    function(text) {
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
    uDict = {
        "yt": ["https://youtube.com"],
        "re": ["https://reddit.com"],
        "email": ["https://mail.google.com/mail/u/1/#inbox"]
    };
    return uDict[key] ? uDict[key][0] : false;
}
