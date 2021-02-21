import React, { useState, useEffect } from 'react'

import Vote from './Vote'
import InputPost from './InputPost'

const Post = ({user, content, vote}) =>  {
	const [reply, setReply] = useState('')

	return (
		<div>
			<div className='user'>{user}</div>
			<div className='content'>{content}</div>
			<Vote/>
			{/* <button className='reply' onClick={e => setReply()}>Reply</button>
			<>{reply}</> */}
		</div>
	)
}

export default Post;