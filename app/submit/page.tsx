import {FC} from "react";

type Prop = {
    searchParams:Promise<{
        [key:string]: string | string[] | undefined
    }>
}
const SubmitPage:FC<Prop> = async ({searchParams}) => {
    const sp = await searchParams;

    return (
        <div>
            submit page {sp.name}
        </div>
    );
};

export default SubmitPage;