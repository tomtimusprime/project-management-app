import React, { Component } from 'react';
import "./Card.css";

class HistoryCard extends Component {
    render(){
        return (
            <div className="card py-3">
                <h1 className="center py-2">Lifetime Stats: </h1>
                <h1 className="data py-2"> Total Projects Completed: {this.props.projectsCompleted} </h1>
                <h1 className="data py-2"> Total Issues Closed: {this.props.issuesClosed} </h1>
            </div>
        )
    }
}

export default HistoryCard;