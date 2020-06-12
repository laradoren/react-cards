import React from 'react';
import './Board.css';
import Row from './Row';

const Board = (props) => {
    const row = [{id: 0,
                  title: "ON HOLD"},
                 {id: 1,
                  title: "IN PROGRESS"},
                 {id: 2,
                  title: "NEEDS REVIEW"},
                 {id: 3,
                  title: "APPROVED"}];
  return (
    <div className="boardBlock">
        <div className="boardCards">
            {
                row.map( r =>  <Row key = {r.id}  id = {r.id} title = {r.title} token = {props.token} /> )
            }  
        </div>
    </div>
  );
}

export default Board;