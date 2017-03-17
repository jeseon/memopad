import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from '../components';
import './App.css';


const App = ({ children, location }) => (
    <MuiThemeProvider>
        <div>
            <Header title="MemoPad"/>
            <ReactCSSTransitionGroup
                component="div"
                className="container"
                transitionName="page-transition"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {children && React.cloneElement(children, {
                    key: location.pathname,
                })}
            </ReactCSSTransitionGroup>
        </div>
    </MuiThemeProvider>
);

export default App;