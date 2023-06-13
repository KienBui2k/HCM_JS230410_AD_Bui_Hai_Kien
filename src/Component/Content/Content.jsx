import React, { useState } from 'react';
import Item from '../Header/Item/Item';
import "../Content/Content.css";

export default function Content({ users, handleDelete, setUsers }) {
    const [editingItem, setEditingItem] = useState(null);

    const handleEdit = (id) => {
        const item = users.find((user) => user.id === id);
        setEditingItem(item);
    };

    const handleSave = (updatedUser) => {
        const updatedUserList = users.map((user) => {
            if (user.id === updatedUser.id) {
                return updatedUser;
            }
            return user;
        });

        localStorage.setItem("listUsers", JSON.stringify(updatedUserList));

        setEditingItem(null);
        setUsers(updatedUserList); // Cập nhật danh sách người dùng tại đây
    };

    return (
        <div className='content__container'>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Content</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Assigned to</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Item
                            key={user.id}
                            user={user}
                            index={index}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            editing={editingItem?.id === user.id}
                            handleSave={handleSave}
                            setUsers={setUsers}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

