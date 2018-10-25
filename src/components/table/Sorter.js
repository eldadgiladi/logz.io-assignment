import React, { Component } from 'react'
import PropType from 'prop-types'
class Sorter extends Component {
    constructor(props = {}) {
        super(props)
        this.state = {
            filters: this.props.columns.filter((col) => col.filter),
            disabled: false,
        }
    }

    handleSelectChange = ({ target }) => {
        this.props.onSortChange(target.value)
    }

    render() {
        const options = this.state.filters.map((filter) =>
            <option
                value={filter.key}
                key={filter.key}
            >
                {filter.name}
            </option>
        )
        return (
            <div>
                <select defaultValue={this.state.sortBy} onChange={this.handleSelectChange}>
                    <option
                        disabled={this.props.sortBy !== ''}
                        value=''
                    >sort by...</option>
                    {options}
                </select>
            </div>
        )
    }
}

Sorter.propTypes = {
    columns: PropType.arrayOf(PropType.shape({
        key: PropType.string,
        name: PropType.string.isRequired,
        specialPrint: PropType.func
    })).isRequired,
    onSortChange: PropType.func.isRequired,
    sortBy: PropType.string.isRequired
}

export default Sorter