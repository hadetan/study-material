import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../Redux/Slices/NoteSlice';
import { nanoid } from '@reduxjs/toolkit';
import ListNotes from './ListNotes';

function Notes() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNote({
            title,
            desc,
            id: nanoid(10)
        }))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title here' onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='Description here' onChange={(e) => setDesc(e.target.value)}/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
        <ListNotes/>
    </div>
  )
}

export default Notes