import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import ItemForm from '../../components/itemForm/ItemForm'
import './CreateItem.css'

const CreateItem = (props = {}) => {
    return (
        <div className='create_item_container'>
            <ItemForm
                submitFunc={props.addItem}
                buttonName={'Add'}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CreateItem);
