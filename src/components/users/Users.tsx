import {IUser} from "@/src/interfaces/IUser";
import User from "@/src/components/users/User";
import {generalService} from "@/src/service/general";

const Users =  async () => {
       const users =  await generalService.getAll<IUser>('users');
    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};