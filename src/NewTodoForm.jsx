import { useState } from "react";

const NewTodoForm = ({ todoList, setTodoList, checkedTodos, setCheckedTodos }) => {
	const [todo, setTodo] = useState("");

	function handleSubmit(e) {
		e.preventDefault(); //prevent rerendering on submit
		if (todo === "") return;
		console.log("submitted");
		setTodoList([...todoList, todo]); //update todo list
		setTodo(""); //clear form input
		setCheckedTodos([...checkedTodos, false]); //set the initial boolean state for the created todo
		console.log(todoList, checkedTodos);
	}

	return (
		<form className="new-item-form" onSubmit={(e) => handleSubmit(e)}>
			<div className="form-row">
				<label>New Todo Item</label>
				<input value={todo} onChange={(e) => setTodo(e.target.value)} />
				<button className="btn">Add</button>
			</div>
		</form>
	);
};
export default NewTodoForm;
