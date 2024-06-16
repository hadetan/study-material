import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNoting } from '../Redux/Slices/NotingSlice';

function ListNoting() {

    const notes = useSelector(state => state.NotingReducer.note);

    const dispatch = useDispatch();

  return (
    <div>
        {notes.map(note => {
            return <div>
                <p>{note.id}</p>
                <h2>{note.title}</h2>
                <p>{note.desc}</p>
                <button onClick={() => dispatch(deleteNoting(note.id))}>Delete</button>
            </div>
        })}
    </div>
  );
}

export default ListNoting;