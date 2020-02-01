import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import Posts from "./Posts/Posts";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Posts/></Route>
                <Route path="/posts"><Posts/></Route>
            </Switch>
        </Router>
    );
}

export default App;
