import {IUser} from "@/src/interfaces/IUser";
import Link from "next/link";

const User = ({user}:{user:IUser}) => {
    return (
        <Link href={`/users/${user.id}`} className='underline'>
        <div className='mx-3'>{user.id}. {user.name}</div>
        </Link>
    );
};

export default User;