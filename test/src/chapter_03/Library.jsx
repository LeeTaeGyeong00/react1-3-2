import React from "react";
import Book from "./Book";

export default function Library(props) {
	return (
		<div>
			<Book name="처음 만난 파이썬" numOfPage={300} />
			<Book name="처음 만난 AWS" numOfPage={400} />
			<Book name="처음 만난 리액트" numOfPage={500} />
		</div>
	);
}
/*
JSX를 사용한 코드
const element =(
	<h1 className="greeting">
		Hello,world!
	</h1>
)
JSX를 사용하지 않은 코드
const element = React.createElement(
	'h1',
	{className: 'greeting'},
	'Hello, world!')
*/
