import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
class StreamDelete extends React.Component {
    componentDidMount() {}
    renderAction = () => {
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                StreamDelete
                <Modal
                    title="Delete Stream"
                    content="Are you sure to delete the stream?"
                    actions={this.renderAction()}
                    onDisMiss={() => history.push('/')}
                />
            </div>
        );
    }
}
export default StreamDelete;
