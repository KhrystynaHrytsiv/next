'use client';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidation} from "@/src/validation/carValidation";
import {carService} from "@/src/service/api";
import {CarFormData} from "@/src/interfaces/CarFormData";


const CarForm = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm<CarFormData>({mode: 'all', resolver:joiResolver(carValidation)});

    const saveCar:SubmitHandler<CarFormData> = async (car:CarFormData) => {
       await carService.createCar(car);
       reset()
    };
    return (
        <form onSubmit={handleSubmit(saveCar)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <p>{errors.brand.message}</p>}
            <input type={'number'} placeholder={'price'} {...register('price')}/>
            {errors.price && <p>{errors.price.message}</p>}
            <input type={'number'} placeholder={'year'} {...register('year')}/>
            {errors.year && <p>{errors.year.message}</p>}
            <button type='submit'>Save</button>
        </form>
    );
};

export default CarForm;