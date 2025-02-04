import React from 'react'
import { Col, Row } from 'react-bootstrap';
export default function Photos(props) {

	const photos = props.photos;

	return (
		<div className='my-5 d-flex justify-content-center'>
			{/* <Row className='w-75'>
				{
					photos.map(photo => (
						<Col className='photos-col' xs={12} md={4}>
						<div>
							<img className='m-3 photos' src={photo.src} />
						</div>

						</Col>
					))
				}
			</Row> */}

		</div>
	)
}
