import React, { useState } from 'react';
import "../Item/Item.css";

export default function Item({ user, index, handleDelete, handleEdit, editing, handleSave, setUsers }) {
    const [editedContent, setEditedContent] = useState(user.learn);
    const [editedDate, setEditedDate] = useState(user.date);
    const [editedStatus, setEditedStatus] = useState(user.status);
    const [editedName, setEditedName] = useState(user.name);

    const handleEditClick = () => {
        handleEdit(user.id);
    };

    const handleSaveClick = () => {
        const updatedUser = { ...user, learn: editedContent, date: editedDate, status: editedStatus, name: editedName };
        handleSave(updatedUser);
    };

    return (
        <tr>
            <td className='td_1'>{index+1}</td>
            {editing ? (
                <>
                    <td className='td_2'>
                        <input type="text" value={editedContent} onChange={e => setEditedContent(e.target.value)} />
                    </td>
                    <td className='td_3'>
                        <input type="text" value={editedDate} onChange={e => setEditedDate(e.target.value)} />
                    </td>
                    <td className='td_4'>
                        <input type="text" value={editedStatus} onChange={e => setEditedStatus(e.target.value)} />
                    </td>
                    <td className='td_5'>
                        <input type="text" value={editedName} onChange={e => setEditedName(e.target.value)} />
                    </td>
                    <td className='td_6'>
                        <button onClick={handleSaveClick}>Save</button>
                    </td>
                </>
            ) : (
                <>
                    <td className='td_2'>{user.learn}</td>
                    <td className='td_3'>{user.date}</td>
                    <td className='td_4'>{user.status}</td>
                    <td className='td_5'>{user.name}</td>
                    <td className='td_6'>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                        <button onClick={() => handleEditClick(user.id)}>Edit</button>
                    </td>
                </>
            )}
        </tr>
    );
}
