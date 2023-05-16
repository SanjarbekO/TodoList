import React from 'react';

const TodoBottom = ({todo,setTodo}) => {

    const deleteAllDoneTodos = () => {
        setTodo(prev => prev.filter(item => !item.isDone))
    };

    return (
        <div className='todo__bot'>
            <div style={{background: todo.every(item => item.isDone) ? 'red' : 'none'}} className='todo__lvl'>
                {todo.filter(item => item.isDone).length} of {todo.length} task done
            </div>
            <button className='todo__del-all' onClick={deleteAllDoneTodos}>Remove checked</button>
        </div>
    );
};

export default TodoBottom;