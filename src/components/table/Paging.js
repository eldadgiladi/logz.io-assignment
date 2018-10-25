import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Paging extends Component {

    constructor(props = {}) {
        super(props)
        this.rowsPerPage = 10
    }

    componentDidUpdate() {
        const maxPage = this.props.rowLength / this.rowsPerPage + 1
        if (this.props.page >= maxPage) this.props.onPageChange(maxPage - 1)
    }

    render() {
        const options = [];
        for (let i = 0; i < this.props.rowLength; i += this.rowsPerPage) {
            const val = i / this.rowsPerPage + 1
            options.push(
                <option
                    key={val}
                    value={val}
                >{val}</option>
            )
        }

        return (
            <div>
                <select value={this.props.page}
                    onChange={({ target }) => { this.props.onPageChange(target.value) }}>
                    {options}
                </select>
            </div>
        )
    }
}

Paging.propTypes = {
    rowLength: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Paging