import React, { Component } from 'react';
import './Board.css';
import Row from './Row';


class RowContainer extends Component {  
 
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
        return (
            <Row />
        )
    }
    
}

export default RowContainer;