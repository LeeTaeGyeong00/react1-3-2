import { useState, useEffect } from "react";
export default function UserListItem(props) {
	const [isOnline, setIsOnline] = useState(null);
	const isOnlice = userStatus(props.user.id);
	if (isOnline === null) {
		return "대기중...";
	}
}
