import React from 'react';
import { connect } from 'react-redux';
class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}
const mapStateToProp = (state, ownProps) => {
    //owsProps is the same thing as props in our component
    //mapStateToProp is the function which we can get the state from store to be
    //the prop in our component
    //then we user connect function and pass this function to it
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProp)(UserHeader);
