import React, {useState} from 'react'
import { Button, Typography } from '@mui/material';

const Aptech = () => {
const [counter, setCounter] = useState(0)
  const handleCount = () => {
    setCounter(counter + 1)
  }
    
  return (
    <>
        <h2>Counter App {counter}</h2>
        <Typography variant="h2">
          Shoaib Ronald
        </Typography>
        <Button variant='contained' onClick={handleCount}>Click Me</Button>
    </>
  )
}

export default Aptech