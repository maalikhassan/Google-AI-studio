const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-goog-api-key", "AIzaSyDUftPaIxInykUGoLD7mLWQgHbBoeSi9Eo");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": "Explain how AI works in a few words"
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));