'use server';

import {ICar} from "@/src/interfaces/ICar";
import {carService} from "@/src/service/api";

export const getCars = async ():Promise<ICar[]> =>{
    return await carService.getCars()
};