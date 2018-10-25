import React from 'react';
import {connect} from 'react-redux';
import Table from '../../components/table/Table'
import columnsConfig from "./columnsConfig";

const ShoppingTable = (props)=>{

    if(Object.keys(props.itemsList).length === 0) return(
        <div style={{margin:'auto'}}>
            no items in the shopping list
        </div>
    )
     return(
        <Table
            rows = {props.itemsList}
            columns = {columnsConfig}
        />
     )
}

const mapStateToProps = (state) => ({
    itemsList: state.itemsList
})

export default connect(mapStateToProps,null)(ShoppingTable)