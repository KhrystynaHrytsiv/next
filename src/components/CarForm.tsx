import {saveCar} from "@/src/server-actions/serverActions";

const CarForm = () => {
    return (
        <form action={saveCar}>
            <input type={'text'} name={'brand'} placeholder={'brand'}/>
            <input type={'number'} name={'price'} placeholder={'price'}/>
            <input type={'number'} name={'year'} placeholder={'year'}/>
            <button type='submit'>Save</button>
        </form>
    );
};

export default CarForm;