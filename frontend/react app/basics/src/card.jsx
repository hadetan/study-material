import React from "react";

function card({myname, list, details}){
    
    // console.log(props);
    return(
        <>
        <div>myname</div>
        <h1>{details.gender}</h1>
        <h1>{details.name?.first}</h1>
        <h1>{details.name?.last}</h1>
        <h1>{details.cell}</h1>
        <ul>
            {list.map(l => (
                <>
                <li key={l}>{l}</li>
                </>
            ))}
        </ul>
        </>
    )
}

export default card;