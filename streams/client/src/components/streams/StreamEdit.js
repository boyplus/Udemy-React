import React from 'react';
import { connect } from 'react-redux';
const StreamEdit = props => {
    console.log(props);
    return <div>StreamEdit</div>;
};
const mapStateToProp = (state, ownProps) => {
    console.log(state.streams);
    return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProp)(StreamEdit);
