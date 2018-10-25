import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateItem } from "../actions";
import Modal from '../components/modal/Modal'
import ItemForm from '../components/itemForm/ItemForm'
class EditItem extends Component {

    constructor(props = {}) {
        super(props)

        this.state = {
            modalHidden: true
        }

    }

    openModal = () => {
        this.setState({
            modalHidden: false
        })
    }

    closeModal = ()=>{
        this.setState({
            modalHidden: true
        })
    }

    updateItem = (item)=>{
        this.props.updateItem(this.props.id,item)
        this.closeModal()
    }

    render() {
        const {id, itemsList} = this.props
        return (
            <div>
                <div onClick={this.openModal}>
                    {this.props.children}
                </div>
                <Modal hidden={this.state.modalHidden} onQuit={this.closeModal} title={'Edit Item'}>
                    <ItemForm
                        name={itemsList[id].name}
                        quantity={itemsList[id].quantity}
                        priceForEach={itemsList[id].priceForEach}
                        buttonName={'update'}
                        submitFunc={this.updateItem}
                    />
                </Modal>
            </div>

        )
    }
}

EditItem.propTypes = {
    id: PropTypes.string.isRequired,

}

const mapStateToProps = (state)=>({
    itemsList: state.itemsList
})

const mapDispatchToProps = (dispatch) => ({
    updateItem: (id, updatedItem) => dispatch(updateItem(id, updatedItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditItem)