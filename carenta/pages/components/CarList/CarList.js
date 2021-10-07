import classes from '../../../styles/CarList.module.css'
import Car from "../Car/Car";

function CarList() {
    return (
        <div className={classes.CarList}>
            <Car
                preview={''}
                brand={'Mazda'}
                model={'363'}
                year={2001}
                rent={1200}
            />
        </div>
    );
}

export default CarList;