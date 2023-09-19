import { useState } from 'react'
import SaveButton from './SaveButton'
import EditButton from './EditButton'
import Field from './Field'

function ExperienceInformation() {
    const [active, setActive] = useState(true);


    return (
        <>
            <h2>Experience Information</h2>
            <Field active={active} label={"Company"} type={"text"}/>
            <Field active={active} label={"Role"} type={"text"}/>
            <Field active={active} label={"Years of Experience"} type={"number"}/>
        </>
    )
}

export default ExperienceInformation 