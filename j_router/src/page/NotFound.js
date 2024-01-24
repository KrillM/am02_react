import { Link } from 'react-router-dom';

export default function NotFound(){
    return  (<>
        <Link to='/prac'>PracHome </Link>
        <Link to='/prac/about'>PracAbout </Link>
        <Link to='/prac/contact'>PracContact</Link>
    </>);
}