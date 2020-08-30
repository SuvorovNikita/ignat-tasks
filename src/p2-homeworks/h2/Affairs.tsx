import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    };
    const setHigh = () => {
        props.setFilter('high')
    };
    const setMiddle = () => {
        props.setFilter('low')
    };
    const setLow = () => {
        props.setFilter('middle')
    };

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
