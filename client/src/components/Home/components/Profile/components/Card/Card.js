import React, { Component } from 'react';

class Card extends Component {
    render(){
        
        
        return (
            <div className="card">
                <h1 className="data">Name: </h1>
                <h1 className="data">Tile: </h1>
                <h1 className="data">About: </h1>
            </div>
        )
    }
}

export default Card;