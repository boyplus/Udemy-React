import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
// this this.props.stream is the entire object which contains id,userId,title,description
// but we did not want to pass the id, userID and put it
// because backend server will complain about it, user could not change id, userId
//initialValues = {{title: this.props.stream.title, description: this.ptops.stream.description}}
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };
    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(
                        this.props.stream,
                        'title',
                        'description'
                    )}
                    onSubmit={this.onSubmit}
                ></StreamForm>
            </div>
        );
    }
}
const mapStateToProp = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProp, { fetchStream, editStream })(StreamEdit);
