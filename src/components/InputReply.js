/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */

import React, { useState, useEffect } from 'react'

import Post from './Post'

const InputReply = ({ depth, replies, setReplies, replyTo }) => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState(`@${replyTo} `)

  const deleteInputReply = () => {
    setReplies([...replies, <Post depth={depth + 1} name={inputName} content={inputContent} />])
  }

  return (
    <div className="reply-container">
      <input
        className="input-field reply-name"
        onChange={e => {
          setInputName(e.target.value)
        }}
        placeholder="Name..."
      />
      <input
        className="input-field reply-content"
        onChange={e => {
          setInputContent(e.target.value)
        }}
        value={inputContent}
        placeholder="Thoughts..."
      />
      <button className="submit" disabled={inputName.length === 0 || inputContent.length === 0} onClick={e => deleteInputReply(depth, setReplies)}>Submit</button>
    </div>
  )
}

export default InputReply
