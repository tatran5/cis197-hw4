import React, { useState, useEffect } from 'react'
import InputContent from './InputContent'

import InputName from './InputName'
import Submit from './Submit'
import PostObject from './PostObject'

const InputPost = ({posts, setPosts}) =>  {
	const [inputName, setInputName] = useState('')
  const [inputContent, setInputPost] = useState('')
	
	return (
		<div className='input-post'>
			<InputName inputName={inputName} onChange={e => {setInputName(e.target.value)}}/>
				<InputContent inputContent={inputContent} onChange={e => {setInputPost(e.target.value)}}/>
				<Submit 
					disable={(inputName.length === 0 || inputContent.length === 0)} 
					onClick={e => { 
						setPosts([...posts, new PostObject(inputName, inputContent, null, 0, 0)]);
						setInputName('');
						setInputPost('');
						console.log(posts);
					}}
				/>
		</div>
	)
}

export default InputPost;