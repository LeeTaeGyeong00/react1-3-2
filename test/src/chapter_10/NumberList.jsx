import "./App.js";

export default function NumberList() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// const listItems = numbers.map((number) => (
	// 	<li>{number}</li>
	// ));
	const todos = [
		{ id: 1, text: "Learn React" },
		{ id: 2, text: "Learn Redux" },
		{ id: 3, text: "Learn React Redux" },
		{ id: 4, text: "Learn React Redux" },
		{ id: 5, text: "Learn React Redux" },
	];

	const listItems = numbers.map((number) => (
		<li key={number.toString()}>{number}</li>
	));
	const todoItems = todos.map((todo) => (
		<li key={todo.id}>{todo.name}</li>
	));
	const indexItems = todos.map((todo, index) => (
		<li key={index}>{todo.name}</li>
	));
	return <ul>{listItems}</ul>;
}
