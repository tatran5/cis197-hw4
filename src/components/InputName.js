import React, { useState, useEffect } from 'react'

const InputName = ({inputName, onChange}) =>  (
	<>
		<input value={inputName} onChange={onChange} placeholder='Enter your name...'/>
		<br/>
	</>
)

export default InputName;