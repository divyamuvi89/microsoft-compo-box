import React, { useEffect } from "react";
import { useState } from "react";


function MyCounter(){

const[count, setCount] = useState(0);

useEffect(() => {
    document.title = `count is ${count}`
}, [count])



    return(
        <div>
            <p>Count is now {count}</p>
            <button onClick={() => setCount(count+1)}>Click To Increment</button>
        </div>

    );

}

export default MyCounter;