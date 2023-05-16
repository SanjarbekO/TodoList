import React, {useState} from 'react';

const TodoItem = ({item,deleteOneTodo,setImportantOneTodo,setDoneOneTodo,setChangeOneTodo}) => {

    const changeFunc = (e) => {
        if(e.target.textContent === 'Save'){
            setChangeOneTodo(item.id,changeText);
        }
        setChange(prev => !prev)
    };

    const [change,setChange] = useState(false);
    const [changeText,setChangeText] = useState(item.text || '');
    return (
        <li className='todo__item' style={{background: item.isImportant ? 'gold': item.isDone ? 'green' : 'royalblue'}}>
                    <div className='todo__item-left'>
                    <input className='todo__item-done' checked={item.isDone} type="checkbox" onChange={() => setDoneOneTodo(item.id)}/>
                    {
                        change ? <input className='todo__item-field' type="text" value={changeText} onChange={(e) => setChangeText(e.target.value)}/>:<p className='todo__item-text' style={{textDecoration: item.isDone ? 'line-through':'none'}}>{item.text}</p>
                    }
                </div>

                <div className='todo__item-right'>
                    <button className='todo__item-imp' type='button' onClick={() => setImportantOneTodo(item.id)}>Imp</button>
                    <button className='todo__item-change' type='button' onClick={changeFunc}>{
                        change ? 'Save':'Change'
                    }</button>
                    <button className='todo__item-del' type='button' onClick={() => deleteOneTodo(item.id)}>X</button>
                </div>
        </li>
    );
};

export default TodoItem;