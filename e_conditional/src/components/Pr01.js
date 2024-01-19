import { useState } from 'react';
import Button from './Button';

export default function Pr01(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const renderButton = () => {
        if(isLoggedIn){
            return (<>
                <h1>Welcome Back!</h1>
                <Button type='Logout' onClick={handleToggleClick} />
            </>)
        }
        else {
            return (<>
                <h1>Please sign up.</h1>
                <Button type='Login' onClick={handleToggleClick} />
            </>)
        }
    }

    const handleToggleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return(<>
        {renderButton()}
    </>)
}