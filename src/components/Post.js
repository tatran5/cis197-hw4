/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Consts from './Consts'
import InputReply from './InputReply'
import Vote from './Vote'

const Post = ({ depth, name, content }) => {
  const [replies, setReplies] = useState([])

  if (depth === Consts.maxDepth) {
    // Base case
    return null
  }

  const updateReply = () => {
    if (replies.length === 0 || replies[replies.length - 1].type !== InputReply) {
      setReplies([...replies,
        <InputReply depth={depth} replies={replies} setReplies={setReplies} />])
    } else {
      setReplies(replies.slice(0, replies.length - 1))
    }
  }

  const createReplyButton = () => {
    if (depth < Consts.maxDepth - 1) {
      return (
        <button className="reply" onClick={e => updateReply()}>Reply</button>
      )
    }
    return <></>
  }

  return (
    <div className={`post-container depth-${depth}`}>
      <div className="post-and-vote">
        <div className="post">
          <div className="post-name">{name}</div>
          <div className="post-content">{content}</div>
        </div>
        <Vote />
      </div>
      {replies}
      {createReplyButton()}
    </div>
  )
}

export default Post
