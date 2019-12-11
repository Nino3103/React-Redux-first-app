import { combineReducers } from 'redux'

// REDUCERS

// return static list of song 
const songsReducer = () => {
  return [
    { title: 'Piazza Grande', duration: '3:53'},
    { title: 'Canzone', duration: '5:07'},
    { title: 'Balla balla ballerino', duration: '5:35'},
    { title: 'Disperato erotico stomp', duration: '3:35'},
  ]
}

// select a specific song when selected with a button

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});