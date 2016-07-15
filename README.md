# Recast.ly Redux

Demo:

![Recast.ly demo](https://cloud.githubusercontent.com/assets/6980359/12561585/d24594a8-c355-11e5-9aa9-adb6e2c40a40.gif "Recast.ly demo")

Required credentials for YouTube search:

- [ ] YouTube API Key. Get here [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en)
- [ ] Rename config.example.js to config.js and insert API Key into file.

Install this sprint's dependencies:

- [ ] Run `npm install`

To run the server:

- [ ] Run `npm start`

Todos:

- [ ] Create a reducer function
- [ ] Create a store from your reducer function
- [ ] Use the Provider component to connect your store to App
- [ ] Set exampleVideoData to be default state in reducer
- [ ] Refactor App component and connect to store with mapStateToProps
- [ ] Refactor Search component and connect to store 
- [ ] Refactor VideoListEntry component and connect to store
- [ ] Create action creator to add a single video to store
- [ ] Create action creator to add videos from YouTube search to store
- [ ] Add event handlers to dispatch action creators
