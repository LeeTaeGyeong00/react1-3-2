import React, { useEffect, useState } from "react";

export default function Counter(props) {
	// let counter = 0
	const [count, setCount] = useState(100);

	//const[변수명,set함수명] = useState(초깃값);
	useEffect(() => {
		document.title = `총 ${count}번 클릭했습니다.`;
	});
	//useEffect(이펙트함수,의존성 배열)
	//각 한번씩만 실행 되고 싶을때
	//useEffect(이펙트 함수,[])

	//컴포넌트가 업데이트 될때마다 호출 될때
	//useEffect(이펙트 함수)
	return (
		<>
			<p>총 {count}</p>
			<button onClick={() => setCount(count + 1)}>
				클릭
			</button>
		</>
	);
}
