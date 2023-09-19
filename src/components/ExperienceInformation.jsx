import { useState } from 'react'
import SaveButton from './SaveButton'
import EditButton from './EditButton'
import Field from './Field'

function ExperienceInformation() {
    const [active, setActive] = useState(true);

    function handleClick() {
        setActive(!active);
    }

    let button = active ? <SaveButton onClick={handleClick}/> : <EditButton onClick={handleClick}/>

    return (
        <>
            <h2>Experience Information</h2>
            <form>
                <Field active={active} label={"Company"} type={"text"}/>
                <Field active={active} label={"Role"} type={"text"}/>
                <Field active={active} label={"Years of Experience"} type={"number"}/>
                {button}
            </form>
        </>
    )
}

export default ExperienceInformation 