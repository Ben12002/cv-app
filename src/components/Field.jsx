import { useState } from 'react'

function Field({active, label, type}){
    const [content, setContent] = useState("");

    function handleChange(event){
        setContent(event.target.value);
    }

    if (active) {
        return (
            <>
                <label htmlFor={label}>{label}</label>
                <input id={label} type={type} onChange={handleChange}></input>
            </>
            
        )
    } else {
        return (
            <div>
                <div>{label}</div>
                <div>{content}</div>
            </div>
        )
    }

    
}

export default Field