import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" containerElement={<Link to="/login"/>}/>
        );
    }
}

class Logged extends Component {
    static muiName = 'IconMenu';

    render() {
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    <IconButton><MoreVertIcon/></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Help"/>
                <MenuItem primaryText="Sign out"/>
            </IconMenu>
        );
    }
}

class Header extends Component {
    state = {
        logged: false,
    };

    handleClick = () => (
        document.location.href = "/"
    );

    render() {
        return (
            <AppBar
                title={this.props.title}
                titleStyle={{cursor:'pointer'}}
                onTitleTouchTap={this.handleClick}
                iconElementRight={this.state.logged ? <Logged/> : <Login/>}
            />
        );
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;