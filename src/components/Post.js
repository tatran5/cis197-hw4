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
      return <button className='reply' onClick={e => { updateReply() }}>Reply</button>
    } else {
      console.log('no')
    }
  }

  return (
    <div className={`post-container depth-${depth}`}>
      <div className='post-and-vote'>
        <div className='post'> 
          <div className='post-name'>{name}</div>
          <div className='post-content'>{content}</div>  
        </div>
        <Vote/>
      </div>
      {replies}
      {createReplyButton()}
    </div>
  )
}

export default Post