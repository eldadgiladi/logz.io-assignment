import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ItemForm.css'

class ItemForm extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            name: this.props.name || '',
            quantity: this.props.quantity || '1',
            priceForEach: this.props.priceForEach || ''
        }
    }

    handleInputChange = ({ target }) => {
        this.setState({
            name: target.value
        })
    }

    handleQuantityChange = ({ target }) => {
        this.setState({
            quantity: target.value
        })
    }

    handlePriceChange = ({ target }) => {
        const priceForEach = target.value.replace(/[^\d.-]/g, '');
        this.setState({
            priceForEach
        })
    }

    handleSubmit = () => {
        let { name, quantity, priceForEach } = this.state

        if (name.length <= 1) return alert('name is required')
        if (quantity <= 0 || quantity.length === 0) quantity = 1;
        if (priceForEach < 0 || priceForEach.length===0) return alert('invalid price')
        this.props.submitFunc({
            name,
            quantity,
            priceForEach
        })
    }

    render() {
        return (
            <div className={'item_form_container'}>
                <div className={'flex-1'}>
                    <input
                        className={'item_name'}
                        type="text"
                        placeholder={`item's name`}
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className={'flex-2'}>
                    <input
                        className={'item_price'}
                        type='text'
                        placeholder='price'
                        value={this.state.priceForEach}
                        onChange={this.handlePriceChange}
                    />
                    <input type="number"
                        className={'item_quantity'}
                        placeholder='quantity'
                        min="1"
                        value={this.state.quantity}
                        onChange={this.handleQuantityChange}
                    />
                </div>
                <div className={'flex-3'}>
                    <button
                        className={'submit_item_btn'}
                        onClick={this.handleSubmit}
                    >{this.props.buttonName}</button>
                </div>
            </div>
        )
    }
}

ItemForm.propTypes = {
    submitFunc: PropTypes.func.isRequired,
    name: PropTypes.string,
    quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    priceForEach: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    buttonName: PropTypes.string.isRequired
}

export default ItemForm