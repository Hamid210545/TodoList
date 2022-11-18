import React from 'react'

function Footer({ todo, clearAllItem }) {
    return (
        <div className="footer">
            <span>You have <span className="pendingNumb">
                {todo.length = 0 ? 0 : todo.length}
            </span> pending tasks</span>
            <button onClick={clearAllItem}>Clear All</button>
        </div>
    )
}

export default Footer