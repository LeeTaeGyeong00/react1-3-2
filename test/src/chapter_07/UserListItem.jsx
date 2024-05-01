import { useState, useEffect } from "react";
export default function UserListItem(props) {
	const [isOnline, setIsOnline] = useState(null);
	useEffect(() => {
		function handleStatusChange(status) {
			setIsOnline(status.isOnline);
		}
		ServerApi.subscribeUserStatus(
			props.user.id,
			handleStatusChange
		);
		return () => {
			ServerApi.unsubscribeUserStatus(
				props.user.id,
				handleStatusChange
			);
		};
	});
	return (
		<li style={{ Color: isOnline ? "green" : "black" }}>
			{props.user.name}
		</li>
	);
}
