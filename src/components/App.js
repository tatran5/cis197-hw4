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

const InputReply = ({id, setId, depth, setReply}) => {
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('')

  const deleteInputReply = (inputName, inputContent, id, depth, setReply) => {
    console.log(id)
    // const replyElm = document.getElementById(id)
    // setReply(<Post depth={depth} name={inputName} content={inputContent} id={id} setId={setId}/>)
    // replyElm.remove()
  }

  return (
    <div className='input reply' id={id}>
      <input onChange={e => {console.log(e.target.value); setInputName(e.target.value)}}/>
      <input onChange={e => {setInputContent(e.target.value)}}/>
      <button onClick={e => deleteInputReply(inputName, inputContent, id, depth, setReply)}>Submit</button>
    </div>
  )
}


const Post = ({depth, name, content, id, setId}) => {
  const [reply, setReply] = useState(<></>)

  if (depth === Consts.maxDepth) {
    // Base case
    return null
  }
  
  const updateReply = (id) => {
    setId(id + 1)
    setReply(<InputReply id={id} depth={depth} setReply={setReply}/>)
  }

  return (
    <div className='post'>
      <div className='name'>{name}</div>
      <div className='content'>{content}</div>
      {reply}
      <button onClick={e => { updateReply(id) }}>Reply</button>
    </div>
  )
}

const App = () => {
  const maxDepth = 2;
  const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('') 
  const [rootPosts, setRootPosts] = useState([])
  const [id, setId] = useState(0);

  const updateRootPosts = (rootPosts, inputName, inputContent, id) => {
    console.log('submit root post')
    setRootPosts([...rootPosts, <Post depth={0} name={inputName} content={inputContent} id={id} setId={setId}/>]);
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