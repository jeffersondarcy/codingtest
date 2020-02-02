//@flow
import * as React from 'react';
import {useEffect, useState, Fragment} from 'react';
import Post from "./Post";

export default function Posts(): React.Node {
    const [hasError, setErrors] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData(): Promise<void> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        res
            .json()
            .then(res => setPosts(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (hasError) return null;
    return <Fragment>{posts.map(post => <Post post={post} key={post.id} />)}</Fragment>
}
