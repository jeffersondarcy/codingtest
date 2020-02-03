//@flow
import * as React from 'react';
import Post from "./Post";
import {Grid} from "@material-ui/core";
import type {IPost} from "./Post";

type PostsListProps = {
    posts: Array<IPost>
}

export default function PostsList({posts}: PostsListProps): React.Node {
    return (
        <Grid container direction="column" spacing={ 2 }>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </Grid>);
}
