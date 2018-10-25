import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import ClearAll from '../../containers/ClearAll'

const Header = (props = {}) => {
    return (
        <header id="header">
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <ClearAll />
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;