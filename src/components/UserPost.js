import React, { useState, useEffect } from 'react'

const UserPost = ({onChange}) =>  (
	<>
	<input onChange={onChange} placeholder='Enter your thoughts...'/>
	<br/>
	</>
)

export default UserPost;