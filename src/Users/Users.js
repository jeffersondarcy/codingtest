//@flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import UsersList from "./UsersList";
import {createDataFetcher} from "../functions";

export default function Posts(): React.Node {
    const [hasError, setErrors] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchData = createDataFetcher('https://jsonplaceholder.typicode.com/users', setUsers, setErrors);

    useEffect(() => {
        fetchData();
    }, []);

    if (hasError) return null;
    return <UsersList users={users}/>
}
