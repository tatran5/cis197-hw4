import React, { useState, useEffect } from 'react'
import InputContent from './InputContent'

import InputName from './InputName'
import Submit from './Submit'
import PostObject from './PostObject'
import Post from './Post'

const InputReply = ({posts, setPosts}) =>  {
	const [inputName, setInputName] = useState('')
  const [inputContent, setInputContent] = useState('')
	const [inputSubmitted, setInputSubmitted] = useState(false)

	
	const getComponent = () => {
		if (inputSubmitted) {
			return (
				<Post posts={posts} setPosts={setPosts} user={inputSubmitted} content={inputContent} vote={0}/>
			)
		} else {
			return (
				<>
					<InputName inputName={inputName} onChange={e => {setInputName(e.target.value)}}/>
					<InputContent inputContent={inputContent} onChange={e => {setInputContent(e.target.value)}}/>
					<Submit 
						disable={(inputName.length === 0 || inputContent.length === 0)} 
						onClick={e => {setInputSubmitted(true)}}
					/>
				</>
			)
		}
	}

	return (
		<div>
			{getComponent()}
		</div>
	)
}

export default InputReply;