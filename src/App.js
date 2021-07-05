import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Dinh Duc Viet" },
    { id: 2, title: "Hoang Thi Huong Ly" },
    { id: 3, title: "Tran Thi Thanh Hang" },
  ]);

  const [isToggleOn, setIsToggleOn] = useState("ON");
  const [count, setCount] = useState(0);

  function handleTodoClick(todo) {
    console.log(todo);

    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleClickMe() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }
  function handleMessage() {
    console.log("hello world");
  }
  function handleCounter() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>React hook</h1>
      <p>You clicked {count} times</p>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <button onClick={handleClickMe}>{isToggleOn ? "ON" : "OFF"}</button>
      <button onClick={handleMessage}>Press me to print message</button>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <button onClick={handleCounter}>CLICK ME</button>
    </div>
  );
}

export default App;
