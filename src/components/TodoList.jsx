import React, {useState} from 'react'

function TodoList(props) {
    const [checkBox, setCheckBox] = useState(false);
    const handleClick = (e) => {
        setCheckBox(!checkBox);
    }
  return (
    <li className="list-item">
        <input type="checkbox" id='myCheck' onClick={handleClick} />
        {checkBox ? <s>{props.item}</s> : <h3>{props.item}</h3>}
        <span className="icons">
            <i className='fa-solid fa-trash-can icon-delete'
            onClick={e => {
                props.deleteItem(props.index);
            }}></i>
        </span>
    </li>
  )
}

export default TodoList;