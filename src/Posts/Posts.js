//@flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import PostsList from "./PostsList";
import {createDataFetcher} from "../functions";

export default function Posts(): React.Node {
    const [hasError, setErrors] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = createDataFetcher('https://jsonplaceholder.typicode.com/posts', setPosts, setErrors);
        fetchData();
    }, []);

    if (hasError) return null;
    return <PostsList posts={posts}/>
}
