import React, { useState, useEffect } from 'react'

const Vote = () => {
  const [vote, setVote] = useState(0)

  return (
    <div className='vote'>
      <button className='arrow up' onClick={e => { setVote(vote + 1)}}></button>
      {vote}
      <button className='arrow  down' onClick={e => { setVote(vote - 1)}}></button>
    </div>
  )
}

export default Vote