import { useState, useEffect } from "react";
import React from "react";

function DataFetcher() {

    const[data, setData] = useState(null);

    useEffect(() => {fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
                   .then(response => response.json()).then(data => setData(data))}, [])


    return(
        <div>
            <h1>Data from API</h1>
            {data ? <p>{JSON.stringify(data)}</p> : <p> Loading.... </p> }
        </div>
    )               





} 

export default DataFetcher;