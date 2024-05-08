import logo from "./logo.svg";
import "./App.css";
import Welcome from "./chapter_05/Welcome";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";

import FocusButton from "./chapter_07/FocusButton";
import MeasureEx from "./chapter_07/MeasureEx";
import Counter from "./chapter_07/Counter";
import Toggle2 from "./chapter_08/Toggle2";

function App() {
	return (
		<div className="App">
			<CommentList />
			<Counter />
			<NotificationList />
			<FocusButton />
			<MeasureEx />
			<Toggle2 />

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
