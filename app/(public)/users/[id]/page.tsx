import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/src/interfaces/IUser";

type Props ={
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>
}
export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {id} = await params;
    return {
        title: 'User page title' + id
    }
}
const UserPage:FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    console.log(sp);
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string'){
        obj =JSON.parse(data) as IUser;//for method with JSON
    }

    return (
        <div>
            {obj && <>user page: {obj.id} {obj.name}</>}
        </div>
    );
};

export default UserPage;