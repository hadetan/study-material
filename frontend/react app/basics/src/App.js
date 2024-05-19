import React, { useEffect, useState } from "react";
import Card from "./card"
import axios from "axios";

function App(){

    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const {data} = await axios.get("https://randomuser.me/api", {/**config */})
        console.log("RESPONSE", data)

        const details = data.results[0];
        setDetails(details)
    }
    
    let list = ["gender", "first name", "last name"];
    

    useEffect(() => {
        fetchDetails();
    }, [/**dependency array */])
    return(
        <>
            <Card myname="aquib" list = {list} details={details}/>
            <button
            onClick={fetchDetails}>get details</button>
        </>
    )
}

export default App;