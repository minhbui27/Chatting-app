import React from 'react'
import PropTypes from 'prop-types'

const HeaderTodo = ({ title, onAdd, showAdd }) => {

    return (
        <header>
            <h1>{title}</h1>
            <button onClick={onAdd} className='btn-todo'>
                {showAdd ? 'Close' : 'Add'}
            </button>
        </header>
    )
}

HeaderTodo.defaultProps = {
    title: 'To-Do List',
}

HeaderTodo.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HeaderTodo
