import React, { useState, Component } from 'react';
import './Board.css';
import close from './../../cancel.svg';
import close1 from './../../close1.svg';
import more from './../../more.svg';

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
          addMode: false
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
        let addMode = this.state.addMode;
        return (
            <div className="rowCard">
                <div className={clasN}>
                    {renderSwitch(this.props.id)}
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={close} alt="close" className="close"/>
                        <div className="id"> <b className="light">id:</b> 2339393</div>
                        <div className="text">Text tejе кпе пеп калкалл лкалкла лкалкал елплеп кащеп лелплп кда кзаелп алааалл ckck</div>
                    </div>
                    { addMode && <textarea type="text" placeholder="Ввести заголовок для этой карточки" className="inputAdd" ></textarea>}
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