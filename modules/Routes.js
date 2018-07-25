import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default React.createClass({
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="*" component={NotFound}/>
            </Router>
        );
    }
});