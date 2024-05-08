import { useState } from "react";
export default function LoginControl(props){
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLoginClick = () => {
        setIsLoggedIn(true)
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false)
    }
    let button
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLoginClick}/>
    }else{
        button = <LogoutButton onClick={handleLoginClick}/>
    }
    return(
        <>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </>
    )
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>로그인</button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>로그아웃</button>
    )
}