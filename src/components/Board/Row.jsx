import React, { useState } from 'react';
import './Board.css';
import close1 from './../../close1.svg';
import more from './../../more.svg';
import Card from './Card';

let renderSwitch = (param) => {
    switch(param) {
        case 0:
            return 'ON HOLD';
        case 1:
            return 'IN PROGRESS';
        case 2:
            return 'NEEDS REVIEW';
        case 3:
            return 'APPROVED';
        default:
            return ' ';
    }
  };
 
let Row = ({cards, id, onTitleChange}) => {
    if(cards === undefined) {
        cards = []; ///CHANGE!!
    }
    let cardsRow = cards.filter( c => c.row == id).map( c => {
        return <Card key = {c.id} id = {c.id} text = {c.text} row = {c.row} />
    });
    const [addMode, setAddMode] = useState(false);
    let clasN = "rowHeader" + id;

    let onFieldChange =  (event) => {
        onTitleChange(event.target.value, id);
    };

    let handleCreateNewCard = (event) => {
        console.log(event);
    }

    return (
        <div className="rowCard">
            <div className={clasN}>
                {renderSwitch(id)}
            </div>
                { cardsRow }
            
            {
                !addMode 
                ? <div className="addCard" onClick={ () => {setAddMode(true)}}>
                    <img src={more} alt="more" className="add" />
                    <div className="addCardText">Добавить карточку</div>
                    </div>
                : 
                <form onSubmit = {handleCreateNewCard} className="addForm" >
                    <textarea type="text" placeholder="Ввести заголовок для этой карточки" className="inputAdd" onChange = {onFieldChange}></textarea>
                    <div className="addCardNone">
                        <button className="addCardTextAdd">Добавить карточку</button>
                        <img src={close1} alt="more" className="closeAdd" onClick={ () => {setAddMode(false)}} />                
                    </div> 
                </form>
    
            }                            
        </div>
    )
    
    
}

export default Row;