import { useEffect, useState } from "react";
import "./main.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
	// const [todoList, setTodoList] = useState([]);
	// const [checkedTodos, setCheckedTodos] = useState([]);

	//Initialize todoList state as empty array or stored data in LS
	const [todoList, setTodoList] = useState(() => {
		const storedTodoList = localStorage.getItem("TODOS");
		if (storedTodoList == null) return [];
		return JSON.parse(storedTodoList);
	});

	//Initialize checkedTodos state as empty array or stored data in LS
	const [checkedTodos, setCheckedTodos] = useState(() => {
		const storedChecks = localStorage.getItem("CHECKS");
		if (storedChecks == null) return [];
		return JSON.parse(storedChecks);
	});

	//update storage when checks or todolist state changes
	useEffect(() => {
		localStorage.setItem("TODOS", JSON.stringify(todoList));
		localStorage.setItem("CHECKS", JSON.stringify(checkedTodos));
	}, [todoList, checkedTodos]);

	return (
		<>
			<NewTodoForm
				todoList={todoList}
				setTodoList={setTodoList}
				checkedTodos={checkedTodos}
				setCheckedTodos={setCheckedTodos}
			/>
			<h1>ToDo List</h1>
			<TodoList
				todoList={todoList}
				setTodoList={setTodoList}
				checkedTodos={checkedTodos}
				setCheckedTodos={setCheckedTodos}
			/>
		</>
	);
}

export default App;
