***New In Version 0.2:***
* Type the key shortcut `Alt-Q` to open up Hermes
* Added reddit integration, type `r/[subreddit-name]`

---
### Hermes - Fast Web Browsing

Hermes is a simple chrome extension that allows a user
to set custom shortcuts for the chrome omnibox.

**Note**: This is still a major work in progress.

#### How to Use:
Download and add as an [unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked) to chrome.

#### How to Edit:

URLs and their shortcuts are kept in a simple dictionary, just modify the JS
object with desired URLs.

```javascript
uDict = {
    "yt": ["https://youtube.com"],
    "re": ["https://reddit.com"],
    "email": ["https://mail.google.com/mail/u/1/#inbox"]
};
```
#### Major TODOs:
1. Add HTML for users to be able to add custom links within from chrome.
2. Separate the dictionary into a JSON for storage & editing.
3. Make an icon?
