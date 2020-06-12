import React from 'react';
import './Board.css';
import RowContainer from './RowContainer';

const Board = (props) => {
  let row = [{id: 0},
             {id: 1},
             {id: 2},
             {id: 3}];
  return (
    <div className="boardBlock">
        <div className="boardCards">
            {
                row.map( r =>  <RowContainer key = {r.id}  id = {r.id} /> )
            }  
        </div>
    </div>
  );
}

export default Board;