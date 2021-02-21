import React, { useState, useEffect } from 'react'
 
export default () => {
  const [userInput, changeUserInput] = useState('')
  return (
    <input type="text" value={userInput} onChange={e => changeUserInput(e.target.value)} />
  )
}