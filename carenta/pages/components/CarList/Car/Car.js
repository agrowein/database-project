import classes from "../../../../styles/Car.module.scss";
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
            <img className={classes.preview} src={state.preview} alt=""/>
            <div className={classes.info}>
                <div>
                    <span>{state.brand}</span>
                    <span>{state.model}</span>
                </div>
                <span className={classes.year}>{state.year}</span>
                <strong className={classes.rent}>{state.rent}</strong>
            </div>
            <button className={classes.button} onClick={btnHandler}>Оформить</button>

        </div>
    );
}

export default Car;