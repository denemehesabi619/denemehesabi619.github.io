import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Body from '../components/Body'
import Games from '../components/Games'
import Photos from '../components/Photos'
import Videos from '../components/Videos'
import { photos } from '../service/photos'

export default function Dashboard() {
  return (
	<div className='good-vibes-font d-flex flex-column align-items-center' id='Dashboard'>
		<Nav/>

		<Routes>
			<Route path='/' Component={Body}/>
			<Route path='/ageofwar' Component={Body}/>
			<Route path='/tetris' Component={Body}/>
			<Route path='/atesvesu' Component={Body}/>
			<Route path='/photos' element={<Photos photos={photos}/>}/>
			<Route path='/videos' element={<Videos/>}/>

		</Routes>

		<Games/>

	</div>
  )
}
