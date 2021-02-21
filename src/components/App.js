import React, { useState, useEffect } from 'react'

import Consts from './Consts'

// const getPostComponents = (posts, setPosts) => {
// 	const postComponents =  posts.map((post, index) => {
// 		return (
// 			<Post posts={posts} setPosts={setPosts}
//         user={post.user} content={post.content} vote={post.vote}/>
// 		) 
// 	})
// 	return postComponents
// }

// const App = () => {
  
//   const [posts, setPosts] = useState([])

//   return (
//     <>
//       <h1>Thoughts</h1>
//       <InputPost posts={posts} setPosts={setPosts}/>
//       {getPostComponents(posts, setPosts)}
//     </>
//   ) 
// }

const InputReply = ({id, depth, replies, setReplies}) => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('')
  console.log(id)

  const deleteInputReply = (id, depth, setReplies) => {
    const replyElm = document.getElementById(id)
    console.log(replyElm)
    setReplies([...replies, <Post depth={depth + 1} name={inputName} content={inputContent} id={id}/>])
  }

  return (
    <div className='input reply' id={id}>
      <input onChange={e => {setInputName(e.target.value)}}/>
      <input onChange={e => {setInputContent(e.target.value)}}/>
      <button onClick={e => deleteInputReply(id, depth, setReplies)}>Submit</button>
    </div>
  )
}


const Post = ({depth, name, content, id}) => {
  const [replies, setReplies] = useState([])
  const [childId, setChildId] = useState(0)
  const [vote, setVote] = useState(0)

  if (depth === Consts.maxDepth) {
    // Base case
    return null
  }
  
  const updateReply = (id) => {
    setChildId(childId + 1)
    setReplies([...replies, <InputReply id={`${id}-${childId}`} depth={depth} replies={replies} setReplies={setReplies}/>])
  }

  return (
    <div className='post' id={`${id}`}>
      <div className='name'>{name}</div>
      <div className='content'>{content}</div>
      <button onClick={e => { setVote(vote + 1)}}>Up</button>
      <div>{vote}</div>
      <button onClick={e => { setVote(vote - 1)}}>Down</button>
      {replies}
      <button onClick={e => { updateReply(id) }}>Reply</button>
    </div>
  )
}

const App = () => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('') 
  const [rootPosts, setRootPosts] = useState([])
  const [id, setId] = useState(0);

  const updateRootPosts = (rootPosts, inputName, inputContent, id) => {
    setId(id + 1)
    setRootPosts([...rootPosts, <Post depth={0} name={inputName} content={inputContent} id={id}/>]);
  }

  return (
    <>
      <h1>Thoughts:</h1>
      <input value={inputName} onChange={e => {console.log(e.target.value); setInputName(e.target.value)}}/>
      <input value={inputContent} onChange={e => {setInputContent(e.target.value)}}/>
      <button onClick={e => updateRootPosts(rootPosts, inputName, inputContent, id)}>Submit</button>
      {rootPosts}
    </>
  )
}

export default App