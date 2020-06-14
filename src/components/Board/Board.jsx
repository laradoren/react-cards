import React, { Component } from 'react';
import './Board.css';
import RowContainer from './RowContainer';
import {DragDropContext} from 'react-beautiful-dnd';
import { sortCards, updateCard } from '../../redux/board-reducer';
import { connect } from 'react-redux';


class Board extends Component {
     
    onDragEnd = result => {
        //reordering logic
        const {destination, source, draggableId} = result;
        if(!destination) {
            return;            
        }
        this.props.sortCards(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        );
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
    rowList: state.boardPage.rowList
});

export default connect(mapStateToProps, {sortCards, updateCard})(Board);