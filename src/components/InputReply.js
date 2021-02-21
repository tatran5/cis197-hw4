import React, { useState, useEffect } from 'react'

import Post from './Post'

const InputReply = ({depth, replies, setReplies}) => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('')

  const deleteInputReply = (depth, setReplies) => {
    setReplies([...replies, <Post depth={depth + 1} name={inputName} content={inputContent}/>])
  }

  return (
    <div className='input reply'>
      <input onChange={e => {setInputName(e.target.value)}} placeholder='Name...'/>
      <input onChange={e => {setInputContent(e.target.value)}} placeholder='Thoughts...'/>
      <button disabled={inputName.length === 0 || inputContent.length === 0} onClick={e => deleteInputReply(depth, setReplies)}>Submit</button>
    </div>
  )
}

export default InputReply