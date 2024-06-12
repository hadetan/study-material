import React, { useState } from 'react';
import SingleNote from './SingleNote';

function Note() {

    const [notes, setNotes] = useState([]);
    const [curNotes, setCurNotes] = useState("");

    const updateCurNote = (event) => setCurNotes(event.target.value);

    const addNote = () => {
      const newNote = [...notes, curNotes];
      setNotes(newNote);
    }

  return (
    <>
      <input type="text" value={curNotes} onChange={updateCurNote} />
      <button onClick={addNote}>Submit</button>
      <ul>
        {notes.map((note, i) => {
          return <li key={i}><SingleNote note={note}/></li>
        })}
      </ul>
    </>
  );
}

export default Note;