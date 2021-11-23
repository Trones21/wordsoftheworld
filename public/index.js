let wordDiv = document.getElementById("wordForm")
wordDiv.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e)

})

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }


  fetch("https://translate.googleapis.com/translate_a/t?anno=3&client=te&format=html&v=1.0&key&logld=vTE_20210503_00&sl=en&tl=de&tc=1&sr=1&tk=75885.511789&mode=1", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,de;q=0.8,fr;q=0.7,nl;q=0.6,hu;q=0.5",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CIm2yQEIpbbJAQjBtskBCKmdygEIoKDLAQjd8ssBCO/yywEIzfbLAQiz+MsBCJ75ywEI8/nLARiOnssB"
  },
  "referrer": "http://localhost:3000/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "q=%20Words%20of%20the%20World&q=Translate&q=Enter%20a%20Word&q=Words%20of%20the%20World&q=Language%20Translate%20Widget",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(res => res.json()).then(data => console.log(data));