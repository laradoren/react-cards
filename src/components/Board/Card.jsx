import React from 'react';
import './Board.css';
import close from './../../cancel.svg';

const Card = (props) => {
  const onDeleteCard = () => {
    props.deleteCard(props.id);
  }
  return (
    <div className="cards">
        <div className="card">
            <img src={close} alt="close" className="close" onClick= {onDeleteCard} />
            <div className="id"> <b className="light">id:</b> {props.id} </div>
            <div className="text"> {props.text} </div>
        </div>
    </div>
  );
}

export default Card;
