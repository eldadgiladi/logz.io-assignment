import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {removeItem} from '../actions'
class RemoveBtn extends Component {

    handleBtnClick = ()=>{
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <button onClick = {this.handleBtnClick}>delete me!</button>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({
    removeItem: id=>dispatch(removeItem(id))
})

RemoveBtn.propTypes = {
    id: PropTypes.string.isRequired
}

export default connect(null,mapDispatchToProps)(RemoveBtn)