import React, { Component } from 'react';
import "./Card.css";

const WorkCard = ({ issues, projects }) => {

    return (
        <div className="card">
            <h1>Open Items:</h1>
            <h1 className="data"> Number of Open Projects: {projects} </h1>
            <h1 className="data"> Number of Open Issues: {issues} </h1>
        </div>
    )

}

export default WorkCard;