import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import Popup from './Popup';

function MovieItem({ movie }) {
	const [show, setShow] = useState(false);

	const ImgError = (e) => {
		e.target.src = process.env.PUBLIC_URL + '/logo512.png';
	}

	return (
		<>
			<Col>
				<Card onClick={() => {
					setShow(!show);
				}}>
					<Card.Img variant="top" src={movie.large_cover_image} onError={ImgError} />
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<Card.Text>{movie.summary}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			{
				(show === true) ? <Popup show={show} setShow={setShow} movie={movie} ImgError={ImgError} /> : null
			}
		</>
	)
}

export default MovieItem;