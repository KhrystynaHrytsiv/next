import {getAllUsers} from "@/src/services/apiservice";
import Link from "next/link";

const Users = async () => {
    const users = await getAllUsers();
    console.log(users);
    return (
        <div>
            {users.map(user => <div key={user.id}>
                <Link href={''}>{user.id} {user.name}</Link>
            </div>)}
        </div>
    );
};

export default Users;