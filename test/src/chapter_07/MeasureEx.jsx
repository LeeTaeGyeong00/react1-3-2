import { useState, useCallback } from "react";

export default function MeasureEx(props) {
	const [height, setHeight] = useState(0);
	const measureRef = useCallback((node) => {
		if (node != null) {
			setHeight(node.getBoundingClientRect().height);
			//getBoundingClientRect() : 요소의 위치 정보 확인
		}
	}, []);
	// function measureRef(node) {
	//     if (node !== null) {
	//       setHeight(node.getBoundingClientRect().height);
	//       //getBoundingClientRect(): Check the location information of the element
	//     }
	//   }
	return (
		<>
			<h1 ref={measureRef}>안녕, 리액트</h1>
			<h2>
				위 헤더의 높이는 {Math.round(height)}px 입니다.
			</h2>
		</>
	);
}
