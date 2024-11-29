import {  useState } from "react";
import "../Style.css"


function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos((todos) =>
        todos.concat({
          text: input,
          id: Math.floor(Math.random()*100),
         
        })
      );
      setInput("");
    } else {
     alert('Please enter a todo item');
    }
  };
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
