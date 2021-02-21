import React, { useState, useEffect } from 'react'

const InputContent = ({inputContent, onChange}) =>  (
	<>
	<input value={inputContent} onChange={onChange} placeholder='Enter your thoughts...'/>
	<br/>
	</>
)

export default InputContent;