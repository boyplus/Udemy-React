//Action creator
export const selectSong = (song) => {
    return {
        //action (plain javascript object)
        type: 'SONG_SELECTED',
        payload: song
    };
};