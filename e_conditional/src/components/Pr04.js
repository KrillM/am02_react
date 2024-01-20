import { useState } from "react";
import Button from "./Button";

export default function Pr03(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const change = () => {
        setIsLoggedIn(!isLoggedIn); 
    }

    const renderLogin = () => {
        if(!isLoggedIn){
            return (<>
                <h1>Please sign up.</h1>
                <Button onClick={change} type='Login'/>
            </>)
        }
        else {
            return(<>
                <Button onClick={change} type='Logout'/>
                <Button onClick={change} type='My Page'/>
            </>)
        }
    }

    return(<>
        { isLoggedIn && <h1>Welcome back!</h1> }
        {renderLogin()}
    </>)
}