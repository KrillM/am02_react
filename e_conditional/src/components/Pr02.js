import {useState} from 'react';

function Home(){
    return <h1>Home Page</h1>
}

function Profile(){
    return <h1>Profile Page</h1>
}

function Login(){
    return <h1>Login Page</h1>
}

function Error(){
    return <h1>Error! Can not find Page</h1>
}

export default function Pr02(){
    const [page, setPage] = useState('home');

    const changePage = () => {
        switch(page){
            case 'home':
                return <Home />
            case 'profile':
                return <Profile />
            case 'login':
                return <Login />
            default:
                return <Error />
        }
    }
    
    return(<>
        <button onClick={() => setPage('home')}>home</button>
        <button onClick={() => setPage('login')}>login</button>
        <button onClick={() => setPage('profile')}>profile</button>
        <button onClick={() => setPage('error')}>error</button>

        {changePage()}
    </>)
}