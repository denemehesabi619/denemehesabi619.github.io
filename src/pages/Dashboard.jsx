import React from 'react'
import bearRidingDuck from '../assets/img/bearRidingDuck.gif'
import bearWearingDuckHat from '../assets/img/bearWearingDuckHat.gif'
import cozyLofi from '../assets/img/cozyLofiCouple.gif'
import { Link, Route, Routes } from 'react-router-dom'
import AgeOfWarGame from '../games/AgeOfWarGame'
import Tetris from '../games/Tetris'

export default function Dashboard() {
  return (
	<div className='good-vibes-font d-flex flex-column align-items-center' id='Dashboard'>
		<div className='w-100 d-flex justify-content-center pb-5'>
			<img src={bearWearingDuckHat}/>
			<h1>
				Gayish Bebis
			</h1>
			<img src={bearRidingDuck}/>
		</div>

		<div className='cozy-lofi d-flex flex-column flex-lg-row mb-4'>
			<img src={cozyLofi} className='cozy-lofi-gif'/>
			<div className='w-100 pl-lg-5 pt-lg-0 pt-3'>
				<iframe src="https://www.youtube.com/embed/Q7pf_uHvlj4?si=I7oa1ajEP2S_XslU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			
		</div>

		<div className='daydream-font d-flex align-items-center flex-column'>
			<h2>Oyunlar</h2><br/>
			<div className='d-flex'>
				<Link to={'/tetris'} className='p-4 pt-0 text-decoration-none text-dark'>Tetris</Link>
				<Link to={'/ageofwar'} className='p-4 pt-0 text-decoration-none text-dark'>Age Of War</Link>
			</div>
			
		</div>

		<Routes>
			<Route exact path='/' Component={Tetris}/>
			<Route exact path='/ageofwar' Component={AgeOfWarGame}/>
			<Route exact path='/tetris' Component={Tetris}/>
		</Routes>

		

	</div>
  )
}
