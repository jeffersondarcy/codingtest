import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import './App.css';
import Posts from "./Posts/Posts";
import {Container} from "@material-ui/core";
import Users from "./Users/Users";

function App() {
    return (
        <Router>
            <Container maxWidth="md">{/*todo check roboto font and mat ui setup*/}
                <Switch>
                    <Route exact path="/"><Posts/></Route>
                    <Route path="/posts"><Posts/></Route>
                    <Route path="/users"><Users/></Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
