'use server';

import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";
// import {redirect} from "next/navigation";

interface IMeal{
    id:number,
    title:string
}
const db = sql('meals.db');

export const saveMeal = async (formData:FormData) =>{
    // console.log('saveAction');
    // console.log(formData);
    const titleValue = formData.get('title');
    db.prepare(`insert into meals(title)  values(?)`)
        .run(titleValue)
    // redirect('ervf')//функція яка направляє за посиданням вказаним в дужках
    revalidatePath('/')
}

export const getMeals = async ():Promise<IMeal[]> =>{
    return db.prepare<IMeal[]>('select * from meals').all() as IMeal[]
}