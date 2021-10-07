import classes from "../../../styles/Car.module.scss";
import {useState} from "react";

function Car(props) {
    let [state, setState] = useState({
        preview: props.preview,
        brand: props.brand,
        model: props.model,
        year: props.year,
        rent: props.rent,
    });

    const btnHandler = (event) => {
        console.log(event);
    }

    return (
        <div className={classes.Car}>
            <img className={classes.preview} src={props.preview} alt=""/>
            <div className={classes.info}>
                <div>
                    <span>{props.brand}</span>
                    <span>{props.model}</span>
                </div>
                <span className={classes.year}>{props.year}</span>
                <strong className={classes.rent}>{props.rent}</strong>
            </div>
            <button className={classes.button} onClick={btnHandler}>Оформить</button>

        </div>
    );
}

export default Car;