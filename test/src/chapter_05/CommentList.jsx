import React from "react";
import Comment from "./Comment";
import Welcome from "./Welcome";

// Commnet 데이터를 별도의 객체로 분리했을때
// const comments = [
// 	{
// 		name: "이인제",
// 		comment: "안녕하세요, 소플입니다.",
// 	},
// 	{
// 		name: "유재석",
// 		comment: "리액트 재미있어요~!",
// 	},
// 	{
// 		name: "강민경",
// 		comment: "저도 리액트 배워보고 싶어요!!",
// 	},
// ];

// export default function CommentList(props) {
// 	return (
// 		<div>
// 			{comments.map((comment) => {
// 				return (
// 					<Comment
// 						name={comment.name}
// 						comment={comment.comment}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
// }
export default function CommentList(props) {
	return (
		<>
			<Comment name="홍길동" Comment={"ㅎㅇㅎㅇ1"} />
			<Comment name="홍길동1" Comment={"ㅎㅇㅎㅇ1"} />
			<Comment name="홍길동2" Comment={"ㅎㅇㅎㅇ1"} />
		</>
	);
}
