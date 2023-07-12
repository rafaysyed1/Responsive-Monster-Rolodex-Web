import React, { Component } from "react";
import './CardList.style.css'
import Card from "../Card/Card.component";
class CardList extends Component {
    render() {
        const { monsters } = this.props; // Assuming monsters is passed as a prop
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                  
                    return <Card monster = {monster} />
                 
                })}
            </div>
        );
    }
}

export default CardList;
