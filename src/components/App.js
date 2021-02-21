import React, { useState, useEffect } from 'react'

import Consts from './Consts'
import Post from './Post'


const App = () => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('') 
  const [rootPosts, setRootPosts] = useState([])

  const updateRootPosts = (rootPosts, inputName, inputContent) => {
    setRootPosts([...rootPosts, <Post depth={0} name={inputName} content={inputContent}/>]);
  }

  return (
    <>
      <h1>Thoughts?</h1>
      <div className='input-container'>
        <h2>New Thought</h2>
        <input className='input-field input-name' value={inputName} onChange={e => setInputName(e.target.value)} placeholder='Name...'/>
        <input className='input-field input-content' value={inputContent} onChange={e => setInputContent(e.target.value)} placeholder='Thoughts...'/>
        <button className='submit-root-post' disabled={inputName.length === 0 || inputContent.length === 0} onClick={e => updateRootPosts(rootPosts, inputName, inputContent)}>Submit</button>
      </div>
      <div className='posts'>
        <h2>Posts</h2>
        {rootPosts}
      </div>
    </>
  )
}

export default App