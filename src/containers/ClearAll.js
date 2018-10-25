import React from 'react'
import { connect } from 'react-redux'
import { removeAll } from '../actions'

const ClearAll = (props={})=>{
    return (
        <div style={{margin:'auto'}}>
            <button onClick={props.removeAll}>
                Clear All
            </button>
        </div>
    )
}

const MapDispatchToProps = (dispatch) => ({
    removeAll: ()=>dispatch(removeAll())
})

export default connect(null, MapDispatchToProps)(ClearAll)