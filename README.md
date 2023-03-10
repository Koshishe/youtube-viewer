This is a testing starter project using the Youtube API

## Prerequisites

1. Add your own personal youtube API Key in App.tsx `const API_KEY = "ADD_API_KEY_HERE";`
   you can generate one from the [Google Developer Console](https://console.developers.google.com/)

## Available Scripts

In the project directory, you can run:

### `yarn install` | `yarna`

Install all npm dependencies

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
if localhost is not working because of the https redirect try Open [http://127.0.0.1:3000](http://127.0.0.1:3000)

The page will reload if you make edits.<br>
You will also see any errors in the console.

## Proposals to extend and improve
- It might be better to use [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query/) for data fetching
- Mock request for testing ui video and comments components
- Add some es linters
- Store components in their own directories. It would be better to keep all information about ui component in one place (e.g. styles, specs, settings, etc.) for easier future support
- Use preprocessor (e.g. sass or scss) or use ui libraries (e.g. headless ui, material ui, tailwind css)
- As the extension of this project user profile might be added using authorization via Google account. This feature provide us to add possibility to leave the comments, subscribe to channels or create playlists using YouTube API
