import {FC} from "react";
import {Metadata} from "next";

type Props ={
    params:Promise<{id:string}>,
}
export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {id} = await params;
    return {
        title: 'User page title' + id
    }
}
const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;


    return (
        <div>
            user page: {id}
        </div>
    );
};

export default UserPage;