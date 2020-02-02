import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '566163681480-8sgrjkm15loj1mot7a5k0fsbh4knfbgf.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChnage(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChnage);
                });
        });
    }
    onAuthChnage = isSignedIn => {
        if (isSignedIn === true) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn === true) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOutClick}
                >
                    <i className="google icon" /> Signed Out
                </button>
            );
        }
        return (
            <button
                className="ui green google button"
                onClick={this.onSignInClick}
            >
                <i className="google icon" /> Signed In with google
            </button>
        );
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
