import { useState } from 'react';
import Button from './Button';

export default function Pr01(){
    const [isLogin, setIsLogin] = useState(false);

    const settingToggleLogin = () => {
        setIsLogin(!isLogin);
    }

    const renderLogin = () => {
        if(isLogin){
            return (<>
                <h1>Please sign up.</h1>
                <Button onClick={settingToggleLogin} type='Login'/>
            </>)
        }
        else {
            return  (<>
                <h1>Welcome Back!</h1>
                <Button onClick={settingToggleLogin} type='Logout'/>
            </>)
        }
    }

    return(<>
        {renderLogin()}
    </>)
}