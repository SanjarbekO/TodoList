import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import TodoStatus from "../TodoStatus/TodoStatus";

const TodoList = ({todo,setTodo}) => {
    const deleteOneTodo = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id)
        )
    };

    const setImportantOneTodo = (id) => {
      setTodo(prev => prev.map(item => {
          if(item.id === id){
             return {...item, isImportant: !item.isImportant}
          }
          return item;
      }))
    };

    const setDoneOneTodo = (id) => {
        setTodo(prev => prev.map(item => {
            if(item.id === id){
                return {...item, isDone: !item.isDone}
            }
            return item;
        }))
    };

    const setChangeOneTodo = (id,text) => {
        setTodo(prev => prev.map(item => {
            if(item.id === id){
                return {...item, text:text}
            }
            return item;
        }))
    };

    const [status,setStatus] = useState('all');

    return (
            <ul className='todo__list'>
                {
                    status === 'done' && todo.every(item => !item.isDone) ? <h3>Список выполненных задач пуст</h3> : status === 'important' && todo.every(item => !item.isImportant) ? <h3>Список избранных задач пуст</h3> : status === 'all' && !todo.length ? <h3>Список задач пуст</h3>: ''
                }
                {
                    todo.filter(item => {
                        if (status === 'done'){
                            return item.isDone
                        }else if (status === 'important'){
                            return item.isImportant
                        }
                        return item
                    }).map((item)=> (
                        <TodoItem setChangeOneTodo={setChangeOneTodo} setDoneOneTodo={setDoneOneTodo} setImportantOneTodo={setImportantOneTodo} deleteOneTodo={() => deleteOneTodo(item.id)} item={item} key={item.id}/>
                    ))
                }
                <TodoStatus status={status} setStatus={setStatus}/>
            </ul>


    );
};

export default TodoList;