import React from 'react'
import ageOfWarGame from '../assets/games/age-of-war.swf'

export default function AgeOfWarGame() {
  return (
	<div>
		<embed src={ageOfWarGame} width="500" height="500"></embed>
	</div>
  )
}
