import React from 'react';
import "./Card.css";

const HistoryCard = ({ issues }) => {

    return (
        <div className="card py-3">
            <h1 className="center py-2">Lifetime Stats: </h1>
            <h1 className="data py-2"> Total Projects Completed: {''} </h1>
            <h1 className="data py-2"> Total Issues Closed: {issues} </h1>
        </div>
    )
}

export default HistoryCard;