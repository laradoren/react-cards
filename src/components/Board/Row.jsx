import React, { Component } from 'react';
import './Board.css';
import close1 from './../../close1.svg';
import more from './../../more.svg';
import Card from './Card';
import { cardsAPI } from '../../api/api';


class Row extends Component {
    constructor (props) {
        super(props);
        this.state = {
          addMode: false,
          cards: [ ],
          text: " ",
          row: this.props.id
        };
        this.changeMode = this.changeMode.bind(this);        
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
      }
 
      componentDidMount() {
        cardsAPI.requestCards()
        .then(response => {
            this.setState({
              cards: response
            });
          });
      }

      changeMode(value){
        this.setState({
            addMode: value
          });
      }

      handleFieldChange(event) {
        this.setState({
            text: event.target.value
        });
      }

      addNewCard(event) {
          const formDate = new FormData();
          formDate.append('text',this.state.text);
          formDate.append('row',this.state.row);
          cardsAPI.createCard(formDate)
          .then(response => {
              console.log("Succes");
          });
      }

      deleteCard(event) {
        console.log(event);
      }

    render() {
        let clasN = "rowHeader" + this.props.id;
        const {addMode, cards} = this.state;
        return (
            <div className="rowCard">
                <div className={clasN}>
                    {this.props.title}
                </div>
                    { cards.filter( c => c.row == this.props.id).map( c => <Card key = {c.id} id = {c.id} text = {c.text} row = {c.row}  /> ) }
                {
                    !addMode 
                    ? <div className="addCard" onClick={ () => {this.changeMode(true)}}>
                        <img src={more} alt="more" className="add"  />
                        <div className="addCardText">Добавить карточку</div>
                     </div>
                    :   <form onSubmit={this.addNewCard} className="addForm" >
                            <textarea onChange={this.handleFieldChange} type="text" placeholder="Ввести заголовок для этой карточки" className="inputAdd" name = "text" value={this.state.text}  ></textarea>
                            <div className="addCardNone">
                                <button  className="addCardTextAdd">Добавить карточку</button>
                                <img src={close1} alt="more" className="closeAdd" onClick={ () => {this.changeMode(false)}} />                
                            </div> 
                        </form>      
                }                            
            </div>
        )
    }
    
}

export default Row;