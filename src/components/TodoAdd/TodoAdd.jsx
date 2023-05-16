import React from 'react';
import {v4 as uuidv4} from "uuid";

const TodoAdd = ({todo,setTodo}) => {

    const addTodo = async (e) => {
        let text = e.target[0].value;
        e.preventDefault();
        let isHas = todo.some(item => item.text === text);
        if (!isHas){
            await setTodo ((prev) => [...prev, {
                id: uuidv4(),
                text: text,
                isImportant: false,
                isDone: false
            }]);
        }else{
            alert('Такая задача уже существует')
        }
        e.target[0].value = '';
    };
    return (
            <form className='todo__form' onSubmit={addTodo}>
                <input placeholder='Add task' className='todo__field' required type="text"/>
                <button type="submit" className='todo__add'>Add todo</button>
            </form>
    );
};

export default TodoAdd;