import {IUser} from "@/src/interfaces/IUser";

const User = ({user}:{user:IUser}) => {
    return (
        <a href={`/users/${user.id}`}>
        <div>{user.id}. {user.name}</div>
        </a>
    );
};

export default User;