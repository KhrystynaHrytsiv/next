import {ICar} from "@/src/interfaces/ICar";
import {CarFormData} from "@/src/schema/carSchema";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';
export const carService = {
    getCars:async ():Promise<ICar[]> => await fetch(`${baseUrl}/cars`).then(res => res.json()),
    createCar: async (data:CarFormData):Promise<void> => await fetch(`${baseUrl}/cars`,
        {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)})
        .then(res => res.json())
};