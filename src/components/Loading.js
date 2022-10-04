import { Spinner } from 'react-bootstrap';

function Loading() {
	return (
		<>
			<div className="loading">
				<Spinner animation="border" variant="secondary" />
			</div>
		</>
	);
}

export default Loading;