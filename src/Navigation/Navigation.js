// @flow
import * as React from 'react';
import {Tabs, Tab, AppBar} from "@material-ui/core";
import type {RouterProps} from 'react-router-dom';
import {
  withRouter,
} from 'react-router-dom'

export function Navigation(props: RouterProps): React.Node {
    return (
    <AppBar position="sticky">
        <Tabs value={props.history.location.pathname}
              onChange={(event,value) => props.history.push(value)}>
            <Tab label="Home" value="/" />
            <Tab label="Posts" value="/posts" />
            <Tab label="Users" value="/users" />
        </Tabs>
    </AppBar>
    );
}

export default withRouter(Navigation);
