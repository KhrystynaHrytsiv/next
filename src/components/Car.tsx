import {ICar} from "@/src/interfaces/ICar";
import {FC} from "react";

interface IProp{
    car:ICar
}

const Car:FC<IProp> = ({car}) => {
    return (
        <div>
            <div className='text-lg w-50 border bg-rose-50 text-center '>{car.id}. {car.brand}</div>
        </div>
    );
};

export default Car;