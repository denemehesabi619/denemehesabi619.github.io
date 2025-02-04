import React from 'react'
import bearRidingDuck from '../assets/img/bearRidingDuck.gif'
import bearWearingDuckHat from '../assets/img/bearWearingDuckHat.gif'
import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<div className=' pb-5'>
			<div className='w-100 d-flex justify-content-center pb-3'>
				<img className='nav-img' src={bearWearingDuckHat} />
				<h1>
					Gayish Bebis
				</h1>
				<img className='nav-img' src={bearRidingDuck} />
			</div>

			{/* <div className='countryside-font text-center h3'>
				<Link to={'/photos'} className='px-3'>
					[Fotoğraflar]
				</Link>
				<Link to={'/videos'}>
					[Videolar]
				</Link>
			</div> */}
		</div>

	)
}
