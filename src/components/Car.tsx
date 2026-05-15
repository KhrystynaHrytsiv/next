import {ICar} from "@/src/interfaces/ICar";
import {FC} from "react";

interface IProp{
    car:ICar
}

const Car:FC<IProp> = ({car}) => {
    return (
        <div className='text-lg m-2 border text-center bg-rose-100'>{car.id}. {car.brand}</div>
    );
};

export default Car;