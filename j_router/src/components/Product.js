import { useSearchParams } from 'react-router-dom';

export default function Product() {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id')

    return (<>
        <div>전달 받은 id : {id}</div>
    </>);
}