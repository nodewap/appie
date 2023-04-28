import {useState} from 'react';

const Highlight = ()=>{
    const [data,setData] = useState("saurav")

    const updateMe = ()=>{
        setData("ravi")
    }

    return (
        <div>
            <h1>Testing</h1>
            <h1 className='text-6xl'>{data}</h1>
            <button onClick={updateMe}>Update</button>
        </div>
    )
}

export default Highlight;