import React, { useState } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

function Parent() {

    const [parentCount, setParentCount] = useState(0);

    const updateParentCount = (count) => {
        setParentCount(count);
    }

  return (
    <>
        <p>Inside Parent: {parentCount}</p>
        <Child1 updateParentCount={updateParentCount}/>
        <Child2 parentCount={parentCount} />
    </>
  )
}

export default Parent