import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    //selectedSong
    if (!song) {
        return <div>Select a song</div>;
    }
    return (
        <div>
            <h3>Detail for:</h3>
            <p>Tile: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
