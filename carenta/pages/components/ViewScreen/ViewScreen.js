import classes from '../../../styles/ViewScreen.module.css'
import CarList from "../CarList/CarList";

function ViewScreen() {

    return (
        <div className={classes.ViewScreen}>
            <CarList />
        </div>
    );
}

export default ViewScreen;