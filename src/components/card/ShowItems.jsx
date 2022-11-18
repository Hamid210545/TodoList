
function ShowItems({ todo, deleteItem, updateItem }) {

    return (
        <div>
            <ul className="todoList">
                {todo.map((item, index) => (
                    <li key={index}>
                        {item}
                        <span><i className='fas fa-trash delete' onClick={() => deleteItem(index)}></i>
                            <i className='fas fa-edit edit' onClick={() => updateItem(index, item)}></i></span>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default ShowItems
