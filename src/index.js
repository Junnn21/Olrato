import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';
import Register from './Register'
import Home from './Home'

const Routing = (
    <Router>
        <Switch>
            <Route exact path = "/">
                <Login />
            </Route>
            <Route path = "/Register">
                <Register />
            </Route>
            <Route path ="/Home">
                <Home />
            </Route>
        </Switch>
    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

serviceWorker.unregister();
