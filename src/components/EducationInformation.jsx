import { useState } from 'react'
import SaveButton from './SaveButton'
import EditButton from './EditButton'
import Field from './Field'

function EducationInformation() {
    const [active, setActive] = useState(true);
    
    function handleClick() {
        setActive(!active);
    }

    let button = active ? <SaveButton onClick={handleClick}/> : <EditButton onClick={handleClick}/>

    return (
        <>
            <h2>Education Information</h2>
            <form>
                <Field active={active} label={"University"} type={"text"}/>
                <Field active={active} label={"Major"} type={"text"}/>
                <Field active={active} label={"Degree"} type={"text"}/>
                {button}
            </form>
        </>
    )
}

export default EducationInformation