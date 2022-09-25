import React, { useState } from 'react'
import ButtonDown from './components/ButtonDown';
import './components/ButtonDown';
import TodoList from './components/TodoList';
import data from "./components/data.json";

 function Todo() {
  const [active, setIsActive] = useState(0);
  const [showList, setShowList] = useState(true);
  const [datalist, setDatalist] = useState(data);
  const [input, setInput] = useState("");
  
  const listOfData = datalist.map((items)=><li className={`${items.id === active && "active"}`} key={items.id} onClick={() => setIsActive(items.id)}>{items.title}</li>)

  const addToList = () => {
    let data = {
      id: datalist.length + 1,
      title: input
    }
    let allData = datalist;
    allData.unshift(data);
    setDatalist(allData);
    setInput("");
    alert("Successfully data added.")
  }

  const deleteData = () => {
    if(window.confirm(`Are you sure to delete this?`)){
      let dataAfterDeleted = datalist.filter(data => data.id !== active);
      setDatalist(dataAfterDeleted);
    }
  }

  return (
    
    <div className='todocard'>
      <div className='card-header'>
        <h1 className='header-text'>Todos</h1>
      </div>
      <div className='card-content'>
        {showList && <TodoList datalist={listOfData} />}
      </div>
      <div className='card-footer'>
        <div className='todo-input'>
          <input type="text" className="input-field" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="footer-buttons">
          <ButtonDown active={active} setShowList={setShowList} showList={showList} addToList={addToList} deleteData={deleteData} />
        </div>
      </div>
    </div>

    
    
  )
}
export default Todo;


