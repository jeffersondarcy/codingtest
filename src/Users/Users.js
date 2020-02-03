//@flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import UsersList from "./UsersList";
import {createDataFetcher} from "../functions";

export default function Posts(): React.Node {
    const [hasError, setErrors] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = createDataFetcher('https://jsonplaceholder.typicode.com/users', setUsers, setErrors);
        fetchData();
    }, []);

    if (hasError) return null;
    return <UsersList users={users}/>
}
