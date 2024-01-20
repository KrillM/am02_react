import { useState } from "react";
import Button from "./Button";

export default function Pr03(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const change = () => {
        setIsLoggedIn(!isLoggedIn); 
    }

    const renderLogin = () => {
        if(!isLoggedIn){
            return <Button onClick={change} type='Login'/>
        }
        else {
            return <Button onClick={change} type='Logout'/>
        }
    }

    return(<>
        { isLoggedIn ? <h1>Welcome back!</h1>: <h1>Please sign up.</h1> }
        {renderLogin()}
    </>)
}