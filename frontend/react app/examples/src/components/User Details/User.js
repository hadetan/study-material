import React, { useState } from 'react';

function User() {

    const [user, setUser] = useState({name: "", age: ""});

    const handleName = (event) => {
        setUser({...user, name: event.target.value});
    }

    const handleAge = (event) => {
        setUser({...user, age: event.target.value});
    }

  return (
    <div>
        <input type="text" value={user.name} onChange={handleName} placeholder='Enter name'/>
        <input type="number" value={user.age} onChange={handleAge} placeholder='Enter age' />
        <p>Name: {user.name}, Age: {user.age}</p>
    </div>
  );
}

export default User;