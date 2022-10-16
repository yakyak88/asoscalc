const bodyElem = window.document.getElementsByTagName("body");

const script = document.createElement("script");
script.src =
    "chrome-extension://nmpglbikackjbmjjkmebnfiacpgmobho/webAccessibel.js";
script.type = "text/javascript";

bodyElem[0].appendChild(script);
