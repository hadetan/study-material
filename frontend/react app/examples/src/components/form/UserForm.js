import React, { useRef, useState } from 'react'

function UserForm() {

    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const nameInputRef = useRef(null);
    const fruitRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const nameInputValue = nameInputRef.current.value;
        setName(nameInputValue);

        const fruitValue = fruitRef.current.value;
        setFruit(fruitValue);
    };

    const handleChange = (e) => {
        // setFruit(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="#">
            <label htmlFor="name">Name: </label>
            <input type="text" ref={nameInputRef}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>{name}</p>

            <select ref={fruitRef} onChange={handleChange}>
                <option value="">Default</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <p>{fruit}</p>
        </form>
    </div>
  )
}

export default UserForm