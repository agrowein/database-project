import classes from "../../../../styles/Layout.module.css";
import ViewScreen from "../../ViewScreen/ViewScreen"

function Layout() {
    return (
        <div className={classes.Layout}>
            <ViewScreen/>
        </div>

    );
}

export default Layout