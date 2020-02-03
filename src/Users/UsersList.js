//@flow
import * as React from 'react';
import {Grid} from "@material-ui/core";
import type {IUser} from "./User";
import User from "./User";

type PostsListProps = {
    users: Array<IUser>
}

export default function UsersList({users}: PostsListProps): React.Node {
    return (
        <Grid container direction="column" spacing={ 2 }>
            {users.map(user => <User user={user} key={user.id} />)}
        </Grid>);
}
