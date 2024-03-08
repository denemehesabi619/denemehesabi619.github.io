import React from 'react'
import tetris from '../assets/games/Tetris.swf'

export default function Tetris() {
  return (
	<div>
		<embed src={tetris} width="500" height="500"></embed>
	</div>
  )
}
