import {IUser} from "@/src/interfaces/IUser";
import {generalService} from "@/src/service/general";

interface IProp{
    params:{id:string}
}

const UserPage=  async ({params}:IProp) => {
    const {id} =  await params;
     const user = await generalService.getById<IUser>('users', id)

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