import React, { useState, useEffect } from 'react'

const UserName = ({onChange}) =>  (
	<>
		<input onChange={onChange} placeholder='Entter your name...'/>
		<br/>
	</>
)

export default UserName;