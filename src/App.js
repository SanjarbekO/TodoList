import './styles/style.scss'
import React, {useEffect, useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoBottom from "./components/TodoBottom/TodoBottom";
import TodoStatus from "./components/TodoStatus/TodoStatus";


function App() {

    const [todo,setTodo] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('todo')!== null){
            setTodo(JSON.parse(localStorage.getItem('todo')))
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(todo))
    },[todo]);

   return (
    <div className="App">
        <section className='todo'>
            <div className='todo__block'>
                <h1 className='todo__title'>TodoList</h1>
                <TodoAdd todo = {todo} setTodo={setTodo}/>

                <TodoList todo={todo} setTodo={setTodo}/>

                <TodoBottom todo={todo} setTodo={setTodo}/>
            </div>
        </section>
    </div>
  );
}

export default App;
