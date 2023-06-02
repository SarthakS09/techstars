import React, { useState } from 'react'
import '../Styles/Card.scss'

export default function Card(props) {
	const [current, setCurrent]  = useState(false);

	const toggleBookmark = (id) => {
		props.toggleBookmark(id)
	}

	const hasOpted = (id) => {
		return props.hasOpted(id)
	}
	
	return (
	<>
		<div>
			<a href={props.link} target="_blank" rel="noreferrer">
				<img
					src={props.img}
					alt={props.id}
					className="event-banner-min"
				/>
			</a>
			<button className='interest-bar' onClick={() => toggleBookmark(props.id)}>
				{/* hello */}
				{hasOpted(props.id) ? 'Bookmarked ✅' : 'Click to bookmark 📍'}
			</button>
		</div>
	</>
	)
}
