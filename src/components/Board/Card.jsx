import React from 'react';
import './Board.css';
import close from './../../cancel.svg';
import {Draggable} from 'react-beautiful-dnd';

const Card = (props) => {
  const onDeleteCard = () => {
    props.deleteCard(props.id);
  };
  return (
    <div className="cards">
      <Draggable draggableId={props.id.toString()} index={props.index}>
        {provided => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="card">
            <img src={close} alt="close" className="close" onClick= {onDeleteCard} />
            <div className="id"> <b className="light">id:</b> {props.id} </div>
            <div className="text"> {props.text} </div>
          </div>
        )}        
      </Draggable>
    </div>
  );
}

export default Card;
