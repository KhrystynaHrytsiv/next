import {getAllUsers} from "@/src/services/apiservice";
import Link from "next/link";

const Users = async () => {
    const users = await getAllUsers();
    console.log(users);
    return (
        <div>
            {users.map(user => <div key={user.id}>
                {/*<Link href={{pathname: '/users/'+user.id.toString(), query:{name:user.name}}}>{user.id} {user.name}</Link>*/}
                {/*<Link href={{pathname: '/users/'+user.id.toString(), query:{...user}}}>{user.id} {user.name}</Link>*/}
                <Link href={{pathname: '/users/'+user.id.toString(), query:{data:JSON.stringify(user)}}}>{user.id} {user.name}</Link>
            </div>)}
        </div>
    );
};

export default Users;