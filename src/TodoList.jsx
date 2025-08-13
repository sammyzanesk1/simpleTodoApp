const TodoList = ({ checkedTodos, setCheckedTodos, todoList, setTodoList }) => {
	function handleDelete(id) {
		// console.log(id)
		const filteredTodos = todoList.filter((_, i) => i !== id);
		setTodoList(filteredTodos);

		const filteredChecks = checkedTodos.filter((_, i) => i !== id);
		setCheckedTodos(filteredChecks);
		// console.log(todoList, checkedTodos);
	}

	function handleCheck(id) {
		console.log(checkedTodos);
		const updateChecks = checkedTodos.map((e, i) => (id === i ? !e : e));
		console.log(updateChecks);
		setCheckedTodos(updateChecks);
	}
	console.log(todoList, checkedTodos);

	return (
		<div className="container">
			{todoList.length > 0 ? (
				todoList.map((e, i) => (
					<span key={i} className="todo">
						<input checked={checkedTodos[i]} type="checkbox" onChange={() => handleCheck(i)} />
						<p className={checkedTodos[i] === true ? "checked" : ""}>{e}</p>
						<button className="dlt-btn" onClick={() => handleDelete(i)}>
							Delete
						</button>
					</span>
				))
			) : (
				<p>No Todos</p>
			)}
		</div>
	);
};
export default TodoList;
