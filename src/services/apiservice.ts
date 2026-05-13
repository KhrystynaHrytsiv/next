import {IUser} from "@/src/interfaces/IUser";


export const getAllUsers = async ():Promise<IUser[]> =>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json());
    return users

}