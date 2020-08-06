import React, { Component } from 'react';
import "./Card.css";

class ProfileCard extends Component {
    render(){
        return (
            <div className="card">
                <h1>Profile Info: </h1>
                <h1 className="data"> <strong>Name: </strong>{this.props.name} </h1>
                <h1 className="data"> <strong>Title:</strong> {this.props.title} </h1>
                <h1 className="data"> <strong>Bio:</strong> {this.props.about} </h1>
            </div>
        )
    }
}

export default ProfileCard;