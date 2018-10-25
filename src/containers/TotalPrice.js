import React from 'react'
import { connect } from 'react-redux';

const TotalPrice = (props={}) => {
    let sum = 0;
    Object.keys(props.itemsList).forEach((id)=>{
        const {[id]:item} = props.itemsList;
        sum+= item.quantity*item.priceForEach
    })
    return(
        <div>
            <h3>Total Price: {sum}</h3>
        </div>
    )

}

const mapStateToProps = (state) => ({
    itemsList: state.itemsList
})

export default connect(mapStateToProps,null)(TotalPrice);