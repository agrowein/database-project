import classes from '../../../styles/ViewScreen.module.css'
import CarList from "../CarList/CarList";

function ViewScreen() {

    return (
        <div className={classes.ViewScreen}>
            <CarList carList = {[
                {
                    preview: '',
                    brand: 'Mazda',
                    model: '363',
                    year: 2001,
                    rent: 1200
                },
                {
                    preview: '',
                    brand: 'Audi',
                    model: 'A3',
                    year: 2007,
                    rent: 2000
                }
            ]}/>
        </div>
    );
}

export default ViewScreen;