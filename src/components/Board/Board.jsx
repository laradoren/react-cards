import React, { Component } from 'react';
import './Board.css';
import RowContainer from './RowContainer';
import {DragDropContext} from 'react-beautiful-dnd';
import {  sortCards } from '../../redux/board-reducer';
import { connect } from 'react-redux';

class Board extends Component {     
    onDragEnd = result => {
        //reordering logic
        const {destination, source, draggableId} = result;
        if(!destination) {
            return;            
        }
        if(destination.droppableId === source.droppableId && destination.index == source.index) {
            return;
        }            
        const card = this.props.cards.find( c => c.id == draggableId);
        let body = {
            "row": destination.droppableId,
            "seq_num": destination.index,
            "text": card.text
        }
        this.props.sortCards(draggableId, body, source.droppableId, destination.droppableId, source.index, destination.index);   
    }; 
    render() {
        return (
            <DragDropContext onDragEnd = {this.onDragEnd}>
                <div className="boardBlock">
                    <div className="boardCards">
                        {
                            this.props.rowList.map( r =>  <RowContainer key = {r.id}  id = {r.id} title = {r.title} /> )
                        }  
                    </div>
                </div>
            </DragDropContext>
        );
    }

}


const mapStateToProps = state => ({
    rowList: state.boardPage.rowList,
    cards: state.boardPage.cards
});

export default connect(mapStateToProps, {sortCards})(Board);