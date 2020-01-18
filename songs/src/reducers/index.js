import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Hello', duration: '5:00' },
        { title: 'All stars', duration: '3:15' },
        { title: 'Star', duration: '3:57' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
