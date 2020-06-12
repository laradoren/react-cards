import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import {  requestCards, onTitleChange } from './../../redux/board-reducer';
import { compose } from 'redux';

class RowContainer extends React.Component {
    componentDidMount() {
      this.props.requestCards();
    }
   
    render(){
            return <> 
                <Row  
                cards = {this.props.cards}
                id = {this.props.id} onTitleChange = {this.props.onTitleChange}
            />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        cards: state.boardPage.cards,
        newTitle: state.boardPage.newTitle,
        newRow: state.boardPage.newRow
    }
}


export default compose(
    connect(mapStateToProps, {
      requestCards, onTitleChange
    })
)(RowContainer);