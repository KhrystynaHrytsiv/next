import {FC} from "react";
import {IUser} from "@/src/interfaces/IUser";

interface IProp{
    params:{id:string}
}

const UserPage:FC<IProp> =  async ({params}) => {
    const {id} =  await params;
     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
     const user:IUser = await response.json();

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
)
    ;
};

export default UserPage;