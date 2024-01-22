import { useState, useCallback } from 'react';

export default function Pr03(){
    const [items, setItems] = useState(['item1', 'item2', 'item3']);
    const [editing, setEditing] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = useCallback((item) => {
        setEditing(item);
        setEditText(item);
    }, [])

    const handleSave = useCallback((itemToSave) => {
        setItems(items.map((item) => (item === editing ? itemToSave : item)));
        setEditing(null);
    }, [items, editing])

    const handleDelete = useCallback((itemToDelete) => {
        setItems(items.filter((item) => item !== itemToDelete))
    }, [items])

    return (<>
    <ul>
        {items.map((item) => (
            <li key={item}>
                {editing === item ? ( 
                    <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)}></input>) : ( item )}
                {editing === item ? (<button onClick={(e) => handleSave(editText)}>Save</button>) : (<>
                    <button onClick={(e) => handleEdit(item)}>Update</button>
                    <button onClick={(e) => handleDelete(item)}>Delete</button>
                </>)}
            </li>
        ))}
    </ul>
    </>)
}