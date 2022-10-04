import { Modal, Button } from 'react-bootstrap';

function Popup({ show, setShow, movie, ImgError }) {
	const handleClose = () => setShow(false);

	return (
		<>
			<Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{movie.title_long}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img src={movie.background_image} onError={ImgError} alt="" />
					<p className="mt-4">제목 : {movie.title_long}</p>
					<p className="mt-2">평점 : {movie.rating}</p>
					<p className="mt-2">시간 : {movie.runtime}분</p>
					<p className="mt-2">{movie.description_full}</p>
					<div className="d-grid gap-2">
						<Button href={movie.url} target="_blank" rel="noopener noreferrer" variant="outline-dark" size="lg">
							Link
						</Button>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="dark" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Popup;