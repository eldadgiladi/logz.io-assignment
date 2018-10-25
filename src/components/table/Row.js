import React from 'react'
import PropTypes from 'prop-types'

const Row = (props = {}) => {

    const row = props.data.map((val,index) => {
        return <td key={index} >{val}</td>
    })
    return (
        <tr>{row}</tr>
    )
}

Row.propTypes = {
    data: PropTypes.array.isRequired
}

export default Row