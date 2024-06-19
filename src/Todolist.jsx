
import React,{ useState } from 'react'

function Todolist(){

   const [todos ,setTodos] = useState(["Eat Breakfast","Study","Play"]);
   const[newTodo,setNewTodo]=useState("");

   function handleInputTodo(event){
        setNewTodo(event.target.value);
        }
   function handleAddTodo(event){
        if(newTodo.trim() !==""){
            setTodos(t=>[...t,newTodo]);
            setNewTodo("");
        }
        }
        function handleRemoveTodo(index){
            const updatedtodos=todos.filter((_,i) => i !== index);
            setTodos(updatedtodos);
        }
        function handleMoveupTodo(index){
            if(index>0){
                const updatedtodos=[...todos];
                [updatedtodos[index],updatedtodos[index-1]]=[updatedtodos[index-1],updatedtodos[index]];
                setTodos(updatedtodos);
        }
        }
        function handleMovedownTodo(index){
            if(index < todos.length-1){
                const updatedtodos=[...todos];
                [updatedtodos[index],updatedtodos[index+1]]=[updatedtodos[index+1],updatedtodos[index]];
                setTodos(updatedtodos);
        }
        }


    return (
        <div className="To-do-list">
          <h1> My Todo List</h1>
            <div>
                <input className="input-todo"   type="text" placeholder ="Enter_todo_task"  value={newTodo} onChange={handleInputTodo} />
                <button className="add-todo" onClick={handleAddTodo}>add-todo</button>
            </div>
            <ol>
                {todos.map((todo,index)=>
                <li key={index}>
                    <span className="todos-list">{todo}</span>
                    <button className="del-todo" onClick={()=>handleRemoveTodo(index)}>delete</button>
                    <button className="moveup-todo" onClick={()=>handleMoveupTodo(index)}>moveup</button>
                    <button className="movedown-todo" onClick={()=>handleMovedownTodo(index)}>movedown</button>
                </li>
                )}
            </ol>
          
        </div>
    )
}
export default Todolist;