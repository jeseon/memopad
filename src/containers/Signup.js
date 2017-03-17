import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import Authentication from '../components/Authentication';

class Signup extends Component {
    state = {
        open: false,
        message: ''
    }

    handleSignup = (id, pw) => {
        this.setState({
            open: true,
            message: 'Test'
        });
    }

    render() {
        return (
            <div>
                <Authentication mode={false} onSignup={this.handleSignup}/>
                <Snackbar
                    open={this.state.open}
                    message={this.state.message}
                    autoHideDuration={2000}
                />
            </div>
        );
    }
}

export default Signup;