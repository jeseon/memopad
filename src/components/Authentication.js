import React from 'react';
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

const paperHasTitle = ({ title, form }) => (
    <Paper style={style.paper}>
        <div style={style.titleWrap}>
            <div style={style.title}>{ title }</div>
        </div>
        <div style={style.content}>
            { form }
        </div>
    </Paper>
)

const loginForm = (
    <div>
        <TextField floatingLabelText="Username"/><br/>
        <TextField floatingLabelText="Password" type="password"/><br/>
        <RaisedButton primary={true} label="Login" fullWidth={true} style={style.button}/>
        <Divider/>
        <div style={style.tailWrap}>
            <div style={style.tail}>
                <Link to="/signup">Create an account</Link>
            </div>
        </div>
    </div>
);

const registerForm = (
    <div>
        <TextField floatingLabelText="Username"/><br/>
        <TextField floatingLabelText="Password" type="password"/><br/>
        <RaisedButton primary={true} label="Create" fullWidth={true} style={style.button}/>
    </div>
);

const loginView = paperHasTitle({
    title: 'LOGIN',
    form: loginForm
});

const registerView = paperHasTitle({
    title: 'SIGN UP',
    form: registerForm
});

const Authentication = ({ mode }) => (
    mode ? loginView : registerView
);

export default Authentication;