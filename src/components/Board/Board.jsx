import React from 'react';
import './Board.css';
import Row from './Row';

const Board = () => {
    const row = [{id: 0},
                 {id: 1},
                 {id: 2},
                 {id: 3}];
  return (
    <div className="boardBlock">
        <div className="boardCards">
            {
                row.map( r =>  <Row key = {r.id}  id = {r.id} /> )
            }  
        </div>
    </div>
  );
}

export default Board;