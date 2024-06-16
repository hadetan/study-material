import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setMsg } from '../Redux/Slices/MsgsSlice';

function Child1() {

    const inputRef = useRef();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputTextValue = inputRef.current.value;
        dispatch(setMsg(inputTextValue));
    }

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <input type="submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default Child1