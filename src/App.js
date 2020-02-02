import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import Posts from "./Posts/Posts";
import {Container} from "@material-ui/core";

function App() {
    return (
        <Router>
            <Container maxWidth="md">
                <Switch>
                    <Route exact path="/"><Posts/></Route>
                    <Route path="/posts"><Posts/></Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
