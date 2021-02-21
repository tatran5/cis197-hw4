import React, { useState, useEffect } from 'react'


const Vote = () =>  {
	const [vote, setVote] = useState(0)

	return	(
		<div className='vote'>
			<button className='up' onClick={e => setVote(vote + 1)}>Up</button>
			<div className='count'>{vote}</div>
			<button className='down' onClick={e => setVote(vote - 1)}>Down</button>
		</div>
	)
}

export default Vote;