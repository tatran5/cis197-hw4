import React, { useState, useEffect } from 'react'

import Consts from './Consts'
import InputReply from './InputReply'
import Vote from './Vote'

const Post = ({depth, name, content}) => {
  const [replies, setReplies] = useState([])  

  if (depth === Consts.maxDepth) {
    // Base case
    return null
  }
  
  const updateReply = () => {
    setReplies([...replies, <InputReply depth={depth} replies={replies} setReplies={setReplies}/>])
  }

  const createReplyButton = () => {
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
      <Vote/>
      {replies}
      {createReplyButton()}
    </div>
  )
}

export default Post