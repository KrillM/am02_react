import { useState } from 'react';

export default function Filter() {
    const [list, setList] = useState([
        { id: 1, alpha: 'a' },
        { id: 2, alpha: 'bb' },
        { id: 3, alpha: 'cccc' },
        { id: 4, alpha: 'dddd' },
        { id: 5, alpha: 'eeeee' },
    ]);

    return (
        <>
            <ol>
                {list.filter((value) => value.alpha.length > 3).map((filteredValue) => (
                    <li key={filteredValue.id}>{filteredValue.alpha}</li>
                ))}
            </ol>
        </>
    );
}