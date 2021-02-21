import React, { useState, useEffect } from 'react'

import UserName from './UserName'
import UserPost from './UserPost'
import Submit from './Submit'
import PostObject from './PostObject'
import Posts from './Posts'

const App = () => {
  
  const [userName, setUserName] = useState(null)
  const [userPost, setUserPost] = useState(null)
  const [posts, setPosts] = useState([])

  return (
    <>
      <h1>Thoughts</h1>
      <UserName onChange={e => {setUserName(e.target.value)}}/>
      <UserPost onChange={e => {setUserPost(e.target.value)}}/>
      <Submit 
        disable={(userName === null || userPost === null)} 
        onClick={e => setPosts([...posts, new PostObject(userName, userPost, null)])}
      />
      <Posts posts={posts} onChange={e => console.log('whut')}/>
    </>
  ) 
}

export default App