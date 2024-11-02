import React from 'react'
import { Col, Row } from 'react-bootstrap';


export default function Videos() {

	return (
		<div className='my-5 d-flex justify-content-center'>
			<Row>

				<Col xs={12}>
					<iframe className='videos' width="560" height="315" src="https://www.youtube.com/embed/pKdj1ldq57s?si=HVV2Fs_oPMACP3L2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					<iframe className='videos' width="560" height="315" src="https://youtube.com/embed/Kgeb0vj_jZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</Col>

			</Row>


		</div>
	)
}
