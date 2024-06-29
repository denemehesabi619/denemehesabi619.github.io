import React from 'react'
import { Col, Row } from 'react-bootstrap';


export default function Videos(props) {

	const videos = props.videos;

	return (
		<div className='my-5 d-flex justify-content-center'>
			<Row>
{
					videos.map(videocuk => (
						<Col xs={12}>
							<video
								className='videos'
								src={videocuk.src}
								controls
							/>
						</Col>

						
					))
				}
			</Row>
				

		</div>
	)
}
