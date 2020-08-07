import React, { Component } from 'react';
import "./Card.css";

class WorkCard extends Component {
    render(){
        return (
            <div className="card py-3">
                <h1>Open Items:</h1>
                <h1 className="data"> Number of Open Projects: {this.props.OpenProjects} </h1>
                <h1 className="data"> Number of Open Issues: {this.props.OpenIssues} </h1>
            </div>
        )
    }
}

export default WorkCard;