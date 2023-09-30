import React from "react";

import classes from "./Cars.module.css"
import CarList from "./CarList";
import Introduction from "../header/Intorduction";

const Cars = () => {
    return (
        <>
        <div className={classes.header}>
        <Introduction />
        </div>
        <div className={classes.cars}>
            <h2><span>LATEST</span> INVENTORY</h2>
            <CarList className={classes["car-list"]} />
        </div>
        </>
    )
}

export default Cars