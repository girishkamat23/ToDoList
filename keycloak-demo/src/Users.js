import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((results) => setUsers(results?.data));
  }, []);

  return (
    <div>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <p>{user.id}</p>
              <p>{user.email}</p>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <img src={user.avatar} alt="Avatar"></img>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
