import React, { useState } from 'react';
import './Board.css';
import close1 from './../../close1.svg';
import more from './../../more.svg';
import Card from './Card';


const Row = (props) => {  
  //Set the mode which add a new card
  const [addMode, setAddMode] = useState(false);

  const onHandleFieldChange = (event) => {
    props.handleFieldChange(event.target.value, props.id);
  };

  const addNewCard = (event) => {
      event.preventDefault();
      const formDate = new FormData();
      formDate.append('text', props.text);
      formDate.append('row', props.row);
      props.addNewCard(formDate);
      props.handleFieldChange(event.target.value, props.id);
      setAddMode(false);
      props.handleFieldChange(" ", props.id);
  };

  let clasN = "rowHeader" + props.id;
  let cardsArray = props.cards.filter( c => c.row == props.id).map( c => <Card key = {c.id} id = {c.id} text = {c.text} row = {c.row} deleteCard = {props.deleteCard}  /> );
  let countCards = cardsArray.length;
  return (
    <div className="rowCard">
      <div className={clasN}>
          {props.title} - {countCards}
      </div>
      { cardsArray }
      {
        !addMode 
        ? <div className="addCard" onClick={ () => {setAddMode(true)}}>
            <img src={more} alt="more" className="add"  />
            <div className="addCardText">Добавить карточку</div>
          </div>
          : <form onSubmit={addNewCard} className="addForm" >
              <textarea onChange={onHandleFieldChange} type="text" placeholder="Ввести заголовок для этой карточки" className="inputAdd" name = "text" value={props.text}  ></textarea>
              <div className="addCardNone">
                  <button  className="addCardTextAdd">Добавить карточку</button>
                  <img src={close1} alt="more" className="closeAdd" onClick={ () => {setAddMode(false)}} />                
              </div> 
            </form>      
      }                            
    </div>
  )       
}

export default Row;