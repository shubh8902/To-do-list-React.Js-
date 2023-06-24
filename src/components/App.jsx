import React, {useState} from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);
    let addList = (inputText) => {
        if (inputText !== "")
        setListTodo([...listTodo,inputText]);
    }
    const deleteListItem = (key) => {
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1);
        setListTodo([...newListTodo]);
    }
  return (
    <div className='main-container'>
        <div className="center-container">
          <TodoInput List={addList}/>
          {listTodo.map((listItem, i)=>{
             return (
                <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
             )
          })}
        </div>
    </div>
  )
}

export default App;