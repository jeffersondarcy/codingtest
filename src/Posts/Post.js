// @flow
import * as React from 'react';
import {ListItemText} from "@material-ui/core";

type IPost = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

type PostProps = {
    post: IPost
}

export default function Post({post}: PostProps): React.Node {
    return (
        <ListItemText primary={post.title} secondary={post.body} />
    );
}
