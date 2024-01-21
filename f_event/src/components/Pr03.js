import { useState } from "react";
import Select from './Select';
import Input from './Input';
import Result from './Result';

export default function Pr02(){
    const [data, setData] = useState({
        image: 'bm',
        backgroundColor: 'black',
        fontColor: 'white',
        content: 'test'
    })

    return (<>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Select setData={setData} />
    </div>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Input setData={setData} />
    </div>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Result data={data} />
    </div>
    </>)
}