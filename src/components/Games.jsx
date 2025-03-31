import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AgeOfWarGame from '../games/AgeOfWarGame'
import Tetris from '../games/Tetris'
import AtesVeSu from '../games/AtesVeSu'

export default function Games() {
  return (
	<div>
		<div className='daydream-font d-flex align-items-center flex-column'>
			<h2>Oyunlar</h2><br/>
			<div className='d-flex'>
				<Link to={'/tetris'} className='p-4 pt-0 text-decoration-none text-dark'>Tetris</Link>
				<Link to={'/ageofwar'} className='p-4 pt-0 text-decoration-none text-dark'>Age Of War</Link>
				<Link to={'/atesvesu'} className='p-4 pt-0 text-decoration-none text-dark'>Ates ve Su</Link>
        <Link to={'/crush-the-castle'} className='p-4 pt-0 text-decoration-none text-dark'>Crush The Castle</Link>
			</div>

		</div>

		<Routes>
			<Route exact path='/' Component={Tetris}/>
			<Route exact path='/ageofwar' Component={AgeOfWarGame}/>
			<Route exact path='/tetris' Component={Tetris}/>
			<Route exact path='/atesvesu' Component={AtesVeSu}/>
      <Route exact path='/crush-the-castle' Component={CrushTheCastle} />
		</Routes>
	</div>
  )
}
