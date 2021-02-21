import React, { useState, useEffect } from 'react'

import InputPost from './InputPost'
import Post from './Post'

const getPostComponents = (posts) => {
	const postComponents =  posts.map((post, index) => {
		return (
			<Post user={post.user} content={post.content} vote={post.vote}/>
		) 
	})
	console.log(postComponents)
	return postComponents
}

const App = () => {
  
  const [posts, setPosts] = useState([])

  return (
    <>
      <h1>Thoughts</h1>
      <InputPost posts={posts} setPosts={setPosts}/>
      {/* <Posts posts={posts} setPosts={setPosts}/> */}
      {getPostComponents(posts)}
    </>
  ) 
}

export default App