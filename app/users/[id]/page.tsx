import {FC} from "react";
import {IUser} from "@/src/interfaces/IUser";

interface IProp{
    params:{id:string}
}

const UserPage:FC<IProp> =  async ({params}) => {
    const {id} =  await params;
     const user:IUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(data => data.json());

    return (
        <div className='m-10 text-lg'>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
)
    ;
};

export default UserPage;