import React from 'react';

const TodoStatus = ({status,setStatus}) => {
    return (
        <div className='todo__status'>
            <button onClick={() => setStatus(status='all')} className="todo__status-all">All</button>
            <button onClick={() => setStatus(status='done')} className="todo__status-done">Done</button>
            <button onClick={() => setStatus(status='important')} className="todo__status-imp">Important</button>
        </div>
    );
};

export default TodoStatus;