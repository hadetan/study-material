import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNoting } from '../Redux/Slices/NotingSlice';
import { nanoid } from '@reduxjs/toolkit';
import ListNoting from './ListNoting';

function Noting() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNoting({
            title,
            desc,
            id: nanoid(10)
        }));
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title here' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Description here' onChange={(e) => setDesc(e.target.value)} />
            <input type="submit" onClick={handleSubmit} />
        </form>
        <ListNoting />
    </div>
  )
}

export default Noting