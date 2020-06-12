import React, { Component } from 'react';
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


 
class Row extends Component {
    constructor (props) {
        super(props);
        this.state = {
          addMode: false,
          cards: [
              {
                "id": 0,
                "row": "0",
                "seq_num": 0,
                "text": "string"
              }, 
              {
                "id": 1,
                "row": "1",
                "seq_num": 0,
                "text": "string"
              }, 
              {
                "id": 2,
                "row": "2",
                "seq_num": 0,
                "text": "string"
            }

          ]
        };
        this.changeMode = this.changeMode.bind(this);
      }

      changeMode(value){
        this.setState({
            addMode: value
          });
      }

    render() {
        let clasN = "rowHeader" + this.props.id;
        const {addMode, cards} = this.state;
        return (
            <div className="rowCard">
                <div className={clasN}>
                    {renderSwitch(this.props.id)}
                </div>
                <div className="cards">
                    { cards.filter( c => c.row == this.props.id).map( c => <Card key = {c.id} id = {c.id} text = {c.text} row = {c.row}  /> ) }
                </div>
                {
                    !addMode 
                    ? <div className="addCard" onClick={ () => {this.changeMode(true)}}>
                        <img src={more} alt="more" className="add" />
                        <div className="addCardText">Добавить карточку</div>
                     </div>
                    : <div className="addCardNone">
                        <div className="addCardTextAdd">Добавить карточку</div>
                        <img src={close1} alt="more" className="closeAdd" onClick={ () => {this.changeMode(false)}} />                
                     </div>      
                }                            
            </div>
        )
    }
    
}

export default Row;