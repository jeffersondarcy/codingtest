//@flow
import React, {useEffect, useState} from 'react';

export default function Posts() {
    const [hasError, setErrors] = useState(false);
    const [posts, setPosts] = useState({});

    async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        res
            .json()
            .then(res => setPosts(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <span>{JSON.stringify(posts)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
}
