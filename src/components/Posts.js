import React, { useState, useEffect } from 'react'

import Vote from './Vote'
import Post from './Post'

const getPostComponents = (posts) => {
	const postComponents =  posts.map((post, index) => {
		return (
			<Post user={post.user} content={post.content} vote={post}/>
		) 
	})
	console.log(postComponents)
	return postComponents
}

const Posts = ({posts, setPosts}) => (
	<>
		{getPostComponents(posts)}
	</>
)

export default Posts;