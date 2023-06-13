import './App.css';
import Content from './Component/Content/Content';
import Header from './Component/Header/Header';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("listUsers")) || []);

  const handleAddUser = (newUser) => {
    const addUser = [...users, newUser];
    setUsers(addUser);
    localStorage.setItem(("listUsers"), JSON.stringify(addUser));
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem(("listUsers"), JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <Header handleAddUser={handleAddUser}></Header>
      <Content users={users} handleDelete={handleDelete} setUsers={setUsers}></Content>
    </div>
  );
}

export default App;
