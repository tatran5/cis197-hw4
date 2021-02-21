import React, { useState, useEffect } from 'react'

const getPostComponents = (posts) => {
	const postComponents =  posts.map((post, index) => {
		return (
			<div key={`${post.user}-${index}`}>
				User: {post.user}, content: {post.content}
			</div>
		) 
	})
	console.log(postComponents)
	return postComponents
}

const Posts = ({posts}) => (
	<>
		{getPostComponents(posts)}
	</>
)

export default Posts;