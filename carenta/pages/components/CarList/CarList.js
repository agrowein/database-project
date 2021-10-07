import classes from '../../../styles/CarList.module.css'
import Car from "./Car/Car";
import {useState} from "react";

function CarList(props) {
    const [state, setState] = useState({
        list: props.carList
    });

    return (
        <div className={classes.CarList}>
            { state.list.map((car, index) => {
                    return (
                        <Car
                            key={index}
                            preview={car.preview}
                            brand={car.brand}
                            model={car.model}
                            year={car.year}
                            rent={car.rent}
                        />
                    );
            }) }
        </div>
    );
}

export default CarList;