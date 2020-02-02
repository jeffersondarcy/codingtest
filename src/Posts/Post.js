// @flow
import * as React from 'react';

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
        <div>
            {post.title}
        </div>
    );
}
