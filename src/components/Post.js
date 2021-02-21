import React, { useState, useEffect } from 'react'

import Vote from './Vote'
import InputReply from './InputReply'

const Post = ({posts, setPosts, user, content, depth}) =>  {
	const [reply, setReply] = useState(<></>)

	return (
		<div>
			<div className='user'>{user}</div>
			<div className='content'>{content}</div>
			<Vote/>
			<button 
				className='reply' 
				onClick={e => setReply(
					<InputReply posts={posts} posts={setPosts}/>
				)}
			>Reply</button>
			{reply}
			<br/>
		</div>
	)
}

export default Post;