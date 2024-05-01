import React, { useState } from "react";

function App() {
	const [headingText, setHeadingText] = useState(
		"Initial Heading"
	);

	const handleButtonClick = () => {
		setHeadingText("Updated Heading");
	};

	return (
		<div>
			<h1>{headingText}</h1>
			<button onClick={handleButtonClick}>
				Change Heading
			</button>
		</div>
	);
}

export default App;
/*
React 라이브러리에서 React와 useState 후크를 가져옵니다.
App 기능 구성요소 내에서 useState("Initial Heading")를 사용하여 상태 변수 headingText를 정의합니다. 이 변수는 <h1> 태그의 텍스트 내용을 보유하며 처음에는 "초기 제목"으로 설정됩니다.
버튼을 클릭할 때 headingText 상태를 "Updated Heading"으로 업데이트하는 handleButtonClick 함수를 정의합니다.
JSX에서는 headingText 상태 변수에 의해 결정된 텍스트 콘텐츠로 <h1> 태그를 렌더링합니다.
클릭할 때 <h1> 태그의 텍스트 내용을 변경하는 handleButtonClick 함수를 호출하는 onClick 이벤트 핸들러로 버튼을 렌더링합니다.
 */
/*
import React, { useState, useEffect } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Initial Heading");

  useEffect(() => {
    document.title = headingText; // Update the document title when headingText changes
  }, [headingText]); // Run the effect whenever headingText changes

  const handleButtonClick = () => {
    setHeadingText("Updated Heading");
  };

  return (
    <div>
      <h1>{headingText}</h1>
      <button onClick={handleButtonClick}>Change Heading</button>
    </div>
  );
}

export default App;
*/
