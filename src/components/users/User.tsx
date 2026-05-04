import {IUser} from "@/src/interfaces/IUser";

const User = ({user}:{user:IUser}) => {
    return (
        <div>{user.id}. {user.name}</div>
    );
};

export default User;