/*
import React, { useState } from "react";

function App() {
  const [displayH1, setDisplayH1] = useState(false);

  const handleButtonClick = () => {
    setDisplayH1(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show H1</button>
      {displayH1 && <h1>This is an H1 tag</h1>}
    </div>
  );
}

export default App;


React 라이브러리에서 React와 useState 후크를 가져옵니다.
App 기능 구성요소 내에서 useState(false)를 사용하여 상태 변수 displayH1을 정의합니다. 이 변수는 처음에 false로 설정되어 <h1> 태그가 표시되지 않아야 함을 나타냅니다.
버튼을 클릭하면 displayH1 상태를 true로 업데이트하는 handleButtonClick 함수를 정의합니다.
JSX에서는 handleButtonClick 함수를 호출하는 onClick 이벤트 핸들러로 버튼을 렌더링합니다.
{displayH1 && <h1>This is an H1 tag</h1>}를 사용하여 <h1> 태그를 조건부로 렌더링합니다. 즉, displayH1이 true이면 <h1> 태그가 표시됩니다. 그렇지 않으면 표시되지 않습니다.
*/
import React, { useState } from "react";

function App() {
	const [displayH1, setDisplayH1] = useState(false);

	const handleButtonClick = () => {
		setDisplayH1(true);
	};

	return (
		<div>
			<button onClick={handleButtonClick}>Show H1</button>
			{displayH1 && <h1>This is an H1 tag</h1>}
		</div>
	);
}

export default App;
