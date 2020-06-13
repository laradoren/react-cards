import React, { Component } from 'react';
import './Board.css';
import Row from './Row';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {requestCards, setFields, addNewCard, deleteCard} from './../../redux/board-reducer';
import axios from 'axios';


class RowContainer extends Component {   
  componentDidMount() {
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
  row: state.boardPage.row,
  token: state.authPage.token
});

export default compose(
  connect(mapStateToProps, {requestCards, setFields, addNewCard, deleteCard}),
  withRouter
)(RowContainer);







