import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import Hello from "./Hello";
import Welcome from "./chapter_05/Welcome";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
// import Handling from "./chapter_07/Handling";
import Toggle2 from "./chapter_08/Toggle2";
import Change from "./chapter_07/Change";

// const root = ReactDOM.createRoot(
// 	document.getElementById("root")
// );
// setInterval(() => {
// 	root.render(
// 		<React.StrictMode>
// 			<Clock />
// 		</React.StrictMode>
// 	);
// }, 100);
/*
root.render(
	<React.StrictMode>
		<Clock />
		<Library />
	</React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.render(
	<React.StrictMode>
		<Toggle2 />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
