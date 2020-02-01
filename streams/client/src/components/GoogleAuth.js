import React from 'react';
class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            console.log('complete');
            window.gapi.client
                .init({
                    clientId:
                        '566163681480-8sgrjkm15loj1mot7a5k0fsbh4knfbgf.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChnage);
                });
        });
    }
    onAuthChnage = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn === true) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" /> Signed Out
                </button>
            );
        }
        return (
            <button className="ui green google button" onClick={this.onSignInClick}>
                <i className="google icon" /> Signed In with google
            </button>
        );
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
