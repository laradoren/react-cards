import React, { Component } from 'react';
import './Board.css';
import Row from './Row';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {requestCards, setFields, addNewCard, deleteCard} from './../../redux/board-reducer';


class RowContainer extends Component {   
  componentDidMount() {     
      let token = localStorage.getItem('token');
      let {history} = this.props;
      if(!token){
        history.push('/signin')
      } 
      this.props.requestCards();      
  }

  render() {
    return (
        <Row  {...this.props} cards = {this.props.cards} handleFieldChange={this.props.setFields} addNewCard = {this.props.addNewCard} deleteCard= {this.props.deleteCard} />
    )
  }    
}

let mapStateToProps = (state) => ({
  cards: state.boardPage.cards,
  text: state.boardPage.text,
  row: state.boardPage.row
});

export default compose(
  connect(mapStateToProps, {requestCards, setFields, addNewCard, deleteCard}),
  withRouter
)(RowContainer);







