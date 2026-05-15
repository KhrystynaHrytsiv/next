'use server';

import {ICar} from "@/src/interfaces/ICar";
import {carService} from "@/src/service/api";
import {carSchema} from "@/src/schema/carSchema";
import { revalidatePath } from "next/cache";

export const getCars = async ():Promise<ICar[]> =>{
    return await carService.getCars()
};
export const saveCar = async (formData:FormData):Promise<void> =>{
    const data ={
        brand: formData.get('brand'),
        price: formData.get('price'),
        year: formData.get('year')
    };
    const result = carSchema.safeParse(data);
    if (!result.success){
        console.log(result.error.format());
        return
    }
    await carService.createCar(result.data);
    revalidatePath('/')
};
