import React, { useState, useEffect } from 'react'

import Consts from './Consts'

const InputReply = ({depth, replies, setReplies}) => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('')

  const deleteInputReply = (depth, setReplies) => {
    setReplies([...replies, <Post depth={depth + 1} name={inputName} content={inputContent}/>])
  }

  return (
    <div className='input reply'>
      <input onChange={e => {setInputName(e.target.value)}}/>
      <input onChange={e => {setInputContent(e.target.value)}}/>
      <button disabled={inputName.length === 0 || inputContent.length === 0} onClick={e => deleteInputReply(depth, setReplies)}>Submit</button>
    </div>
  )
}


const Post = ({depth, name, content}) => {
  const [replies, setReplies] = useState([])
  const [vote, setVote] = useState(0)
  

  if (depth === Consts.maxDepth) {
    // Base case
    return null
  }
  
  const updateReply = () => {
    setReplies([...replies, <InputReply depth={depth} replies={replies} setReplies={setReplies}/>])
  }

  const createSubmitButton = () => {
    if (depth < Consts.maxDepth - 1) {
      return <button onClick={e => { updateReply() }}>Reply</button>
    } else {
      console.log('no')
    }
  }

  return (
    <div className={`post depth-${depth}`}>
      <div className='name'>{name}</div>
      <div className='content'>{content}</div>
      <button onClick={e => { setVote(vote + 1)}}>Up</button>
      <div>{vote}</div>
      <button onClick={e => { setVote(vote - 1)}}>Down</button>
      {replies}
      {createSubmitButton()}
    </div>
  )
}

const App = () => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('') 
  const [rootPosts, setRootPosts] = useState([])

  const updateRootPosts = (rootPosts, inputName, inputContent) => {
    setRootPosts([...rootPosts, <Post depth={0} name={inputName} content={inputContent}/>]);
  }

  return (
    <>
      <h1>Thoughts:</h1>
      <input value={inputName} onChange={e => {console.log(e.target.value); setInputName(e.target.value)}}/>
      <input value={inputContent} onChange={e => {setInputContent(e.target.value)}}/>
      <button disabled={inputName.length === 0 || inputContent.length === 0} onClick={e => updateRootPosts(rootPosts, inputName, inputContent)}>Submit</button>
      {rootPosts}
    </>
  )
}

export default App