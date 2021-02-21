import React, { useState, useEffect } from 'react'

const Submit = ({disable, onClick}) =>  (
	<>
		<input type="submit" 
			disabled={disable}
			onClick={onClick} 
			value='Submit'/>
		<br/>
	</>
)

export default Submit;