import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Error() {
	const navigate = useNavigate();
	return (
		<>
			<Container className="mt-5">
				<Row className="justify-content-md-center">
					<Col md="auto">
						<h2>잘못된 접근입니다.</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-center mt-3">
					<Col md="auto">
						<Button variant="dark" onClick={() => {
							//navigate(-1);
							navigate('/all')
						}}>돌아가기</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Error;