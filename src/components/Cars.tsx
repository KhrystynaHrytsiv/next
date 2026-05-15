import Car from "@/src/components/Car";
import {getCars} from "@/src/server-actions/serverActions";

const Cars = async () => {
    const cars = await getCars();
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;