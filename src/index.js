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
import AddPost from './AddPost'
import Chat from './Chat';
import Profile from './Profile'
import About from './About'

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
            <Route path ="/AddPost">
                <AddPost />
            </Route>
            <Route path = "/Chat">
                <Chat />
            </Route>
            <Route path = "/Profile">
                <Profile />
            </Route>
            <Route path = "/About">
                <About />
            </Route>
        </Switch>
    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

serviceWorker.unregister();
