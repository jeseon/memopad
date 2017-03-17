import React, { Component } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { blue500 } from 'material-ui/styles/colors';

const style = {
    paper: {
        left: 0,
        right: 0,
        width: '300px',
        margin: '20px auto',
        textAlign: 'center'
    },
    titleWrap: {
        height: '50px',
        lineHeight:'50px',
        backgroundColor: blue500
    },
    title: {
        color: 'white',
        fontSize: '16px',
        textAlign: 'center'
    },
    content: {
        display: 'inline-block',
    },
    button: {
        margin:'10px 0'
    },
    tailWrap: {
        height: '50px',
        lineHeight: '50px'
    },
    tail: {
        fontSize:'14px',
        textAlign: 'right'
    }
};

class Authentication extends Component {
    state = {
        userid: '',
        passwd: ''
    }

    handleSignup = () => {
        let id = this.state.userid;
        let pw = this.state.passwd;

        this.props.onSignup(id, pw);
    }

    loginView = () => (
        <Paper style={style.paper}>
            <div style={style.titleWrap}>
                <div style={style.title}>LOGIN</div>
            </div>
            <div style={style.content}>
                <div>
                    <TextField floatingLabelText="Username" value={this.state.userid}/><br/>
                    <TextField floatingLabelText="Password" value={this.state.passwd} type="password"/><br/>
                    <RaisedButton primary={true} label="Submit" fullWidth={true} style={style.button}/>
                    <Divider/>
                    <div style={style.tailWrap}>
                        <div style={style.tail}>
                            <Link to="/signup">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );

    registerView = () => (
        <Paper style={style.paper}>
            <div style={style.titleWrap}>
                <div style={style.title}>SIGN UP</div>
            </div>
            <div style={style.content}>
                <div>
                    <TextField floatingLabelText="Username" value={this.state.userid}/><br/>
                    <TextField floatingLabelText="Password" value={this.state.passwd} type="password"/><br/>
                    <RaisedButton primary={true} label="Create" fullWidth={true} style={style.button}
                                  onTouchTap={this.handleSignup}/>
                </div>
            </div>
        </Paper>
    );

    render() {
        return (
            this.props.mode ? this.loginView() : this.registerView()
        );
    }
}

export default Authentication;