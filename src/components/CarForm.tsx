import {saveCar} from "@/src/server-actions/serverActions";

const CarForm = () => {
    return (
        <form action={saveCar}>
            <input type={'text'} placeholder={'brand'}/>
            <input type={'number'} placeholder={'price'}/>
            <input type={'number'} placeholder={'year'}/>
            <button type='submit'>Save</button>
        </form>
    );
};

export default CarForm;