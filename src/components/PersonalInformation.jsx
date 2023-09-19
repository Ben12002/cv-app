import { useState } from 'react'
import SaveButton from './SaveButton'
import EditButton from './EditButton'
import Field from './Field'

function PersonalInformation() {
    const [active, setActive] = useState(true);


    return (
        <>
            <h2>Personal Information</h2>
            <Field active={active} label={"First Name"} type={"text"}/>
            <Field active={active} label={"Last Name"} type={"text"}/>
            <Field active={active} label={"Email"} type={"email"}/>
            <Field active={active} label={"Phone"} type={"tel"}/>
            <Field active={active} label={"Age"} type={"number"}/>
        </>
    )
}

export default PersonalInformation 