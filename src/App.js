import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import Posts from "./Posts/Posts";
import {Container, Paper} from "@material-ui/core";
import Users from "./Users/Users";
import Navigation from "./Navigation/Navigation";

function App() {
    return (
        <Router>
            <Paper>
                <Navigation/>
                <Container maxWidth="md">
                <Switch>
                    <Route exact path="/"><Posts/></Route>
                    <Route path="/posts"><Posts/></Route>
                    <Route path="/users"><Users/></Route>
                </Switch>
                </Container>
            </Paper>
        </Router>
    );
}

export default App;
