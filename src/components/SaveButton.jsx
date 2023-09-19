import { useState } from 'react'

function SaveButton({onClick}) {
   
    return <button type="submit" onClick={onClick}>Save</button>
}

export default SaveButton