// @flow
import * as React from 'react';
import {CardContent, Card, CardHeader, Typography, Grid} from "@material-ui/core";

export type IPost = {
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
        <Grid item xs>
            <Card>
                <CardHeader title={post.title} subheader={`by user ${post.userId}`}/>
                <CardContent><Typography component="p" color="textSecondary">{post.body}</Typography> </CardContent>
            </Card>
        </Grid>
    );
}
