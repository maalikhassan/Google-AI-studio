# Google AI Studio — Front-end Improvements

This project provides a simple chat UI for calling the Gemini API from the browser. The front-end was updated to improve usability, accessibility, and message rendering while keeping the backend API and endpoints unchanged.

## What's new
- Modern chat interface (messages, user/assistant layout)
- Sanitized Markdown rendering using `marked` + `DOMPurify`
- Loading/typing indicators and UI-friendly error handling
- Conversation history in the browser
- Keyboard shortcuts (Enter to send, Shift+Enter for newline)
- Copy response button
- Accessibility improvements (aria-live, labels)

## Security note
The app currently reads the API key from the client-side `app.js`. This is insecure for production. To stop exposing your API key:

1. Create a simple backend route (proxy) that stores your API key server-side and forwards requests to the Google API.
2. Or store the API key in a serverless function or environment variable and use that to proxy requests.

This front-end intentionally keeps the same API URL/behavior to avoid touching your backend logic.

## How to use
1. Open `index.html` in your browser (or serve via a local static server).
2. Type a prompt and press Enter or click Send. Shift+Enter creates a new line.
3. Click the `Copy` button on assistant messages to copy the plain-text response.

## Extending or migrating to a secure flow
If you'd like help migrating the API calls to a backend proxy so the API key is protected, I can help implement the server-side endpoint and update the front-end to call it.

## Files changed
- `index.html` — chat layout, form structure, accessibility updates
- `app.js` — UI logic, typing indicator, conversation history, sanitization
- `style.css` — improved styles for responsive modern chat layout

Enjoy the improved front-end — ping me if you'd like animations, persistent storage, or backend changes.