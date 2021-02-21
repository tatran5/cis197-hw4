/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-cycle */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

const Vote = () => {
  const [vote, setVote] = useState(0)

  return (
    <div className="vote">
      <button
        className="arrow up"
        onClick={e => {
          setVote(vote + 1)
        }}
      />
      {vote}
      <button
        className="arrow  down"
        onClick={e => {
          setVote(vote - 1)
        }}
      />
    </div>
  )
}

export default Vote
