import React, { useState } from 'react';
import SingleNote from './SingleNote';

function Note() {

    const [notes, setNotes] = useState([]);
    const [curNotes, setCurNotes] = useState("");

    function updateCurNote(event) {
      setCurNotes(event.target.value);
    }

    function addNotes() {
      const newNote = [...notes, curNotes];
      setNotes(newNote);
    }

    // const [car, setCar] = useState({
    //   model: "mustang",
    //   year: 2018,
    //   color: "blue"
    // });
  
    // setCar({...car, color: "red"});

  return (
    <>
      <input type="text" onChange={updateCurNote} />
      <button onClick={addNotes}>Submit</button>
      <ul>
        {notes.map((note, i) => {
          return (<li key={i}><SingleNote note={note}/></li>)
        })}
      </ul>
    </>
  );
}

export default Note;