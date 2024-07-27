import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[name, setName] = useState ("Ali")
    useEffect(() =>{
        console.log("UseEffect Hook")
    })
    return (
    <>
    <h2>UseEffect Hook</h2>
    <h3>Name: {name}</h3>
    <Button variant='contained' onClick={() => setName ("Shoaib Ronald")}>Update Name</Button>
    </>
  )
}

export default UseEffect