import React from 'react'
import cozyLofi from '../assets/img/cozyLofiCouple.gif'
import Games from './Games'

export default function Body() {
  return (
	<div className='w-100'>
		<div className='cozy-lofi d-flex flex-column flex-lg-row mb-4'>
			<img src={cozyLofi} className='cozy-lofi-gif'/>
			<div className='w-100 pl-lg-5 pt-lg-0 pt-3'>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/0WeC0myrxGE?si=Qw4WErYVylgdy-BZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>

		</div>
	</div>
  )
}
