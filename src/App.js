import { useState } from 'react'
import Card from './components/card/Card'
import ShowItems from './components/card/ShowItems'
import Footer from './components/card/Footer'
import AlertMsg from './components/alert/AlertMsg'

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)
  const [updateBtn, setUpdateBtn] = useState(false)
  const [ind, setInd] = useState(null)

  const handleChange = (e) => {
    setText(e.target.value);
    setIsEmpty(false);
  }

  const deleteItem = (data) => {
    setTodo(todo.filter((item, index) => index !== data))

  }
  const updateItem = (index, item) => {
    setText(item)
    setUpdateBtn(true)
    setInd(index)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    setTodo(todo.map((element, index) => {
      if (index == ind) {
        return text;
      } else {
        return element;
      }
    }))
    setUpdateBtn(false)
    setText('')
  }

  //clear all

  const clearAllItem = () => {
    setTodo([])
  }

  const addTodo = (e) => {
    e.preventDefault();
    if (text === '') {
      setIsEmpty(true);
    } else {
      setTodo([...todo, text])
      setText('')
      setIsEmpty(false)
    }

  }

  return (
    <div className="container">
      <div className='main-container'>

        <Card />
        {isEmpty ? <AlertMsg /> : null}
        <form className="inputField">
          <input
            type="text"
            placeholder="Add your new todo"
            value={text}
            onChange={handleChange}
          />
          {
            updateBtn ? (<button type="submit" className='update-btn' onClick={handleUpdate}>
              Update
            </button>) : (
              <button type='submit' onClick={addTodo}>
                <i className="fas fa-plus"></i>
              </button>
            )
          }


        </form>
        <ShowItems todo={todo}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
        <Footer todo={todo} clearAllItem={clearAllItem} />
      </div>

    </div>
  );
}

export default App;
