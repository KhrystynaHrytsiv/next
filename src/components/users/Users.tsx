'use client'

import {useEffect, useState} from "react";
import {IUser} from "@/src/interfaces/IUser";
import User from "@/src/components/users/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(data => setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};