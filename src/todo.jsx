import { useState } from "react";
import{ v4 as uuidv4 } from 'uuid';
export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    function handleInput(event){
        setInput(event.target.value);
    }

    function handleDelete(index){
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    function handleDone(index){
        const newTodos = todos.map((todo,idx)=>{
            if(idx === index){
                return {...todo, isDone: true};
            }
            else{
                return{...todo, isDone: todo.isDone}
            }
        });
        setTodos(newTodos);
    }

  return (
    <div>
      <input 
        type="text" 
        value={input}
        onChange={handleInput}
        placeholder="Enter a todo"
        className="border p-2 m-2" 
        />
        <button
        onClick={()=>{
            setTodos([...todos, {text: input, isDone: false, id: uuidv4()}]);
            setInput("");
        }}
        className="bg-blue-500 text-white p-2 m-2"
        >
            Add Todo
        </button>
        <h2 className="px-4 text-3xl font-serif font-bold">OUR LIST</h2>
        <ul className="list-decimal m-4">
            {todos.map((todo, index)=>(
                <li key={index} className="text-lg px-1"><span className={todo.isDone?"line-through":null}>{todo.text}</span> <button className="text-white rounded-full bg-red-500 w-6 h-6" onClick={()=>{
                    handleDelete(index);
                }}>X</button> <button className="text-white rounded-full bg-green-500 w-6 h-6" onClick={()=>{
                    handleDone(index);
                }}><i className="fa-solid fa-check-double"></i></button></li>
            ))}
        </ul>
    </div>
  );
}