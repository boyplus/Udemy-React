import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        //this.props === {songs: state.songs}
        // console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    //take to data from redux store to the props
    console.log(state);
    // return state;
    return { songs: state.songs };
};

//connect component to get songlist from reducer
export default connect(mapStateToProps, {
    //object of action
    selectSong: selectSong
})(SongList);
