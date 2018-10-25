import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ width = '800px', height = '600px', title = 'Modal', hidden, onQuit, children }) => {
    return (
        <div id="shadow_div" hidden={hidden}>
            <div
                id="modal_container"
                style={{ width, height }}
            >
                <div id="header">
                    <div><h2>{title}</h2></div>
                    <div id='quit_div' onClick={onQuit}>×</div>
                </div>
                <div id="children_div">
                    {children}
                </div>
            </div>
        </div>
    )
}



Modal.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    title: PropTypes.string,
    hidden: PropTypes.bool.isRequired,
    onQuit: PropTypes.func.isRequired
}

export default Modal