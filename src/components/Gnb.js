import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Gnb() {
	const sorts = [
		{
			name: 'title'
		},
		{
			name: 'year'
		},
		{
			name: 'rating'
		},
		{
			name: 'peers'
		},
		{
			name: 'download_count'
		},
		{
			name: 'like_count'
		},
		{
			name: 'date_added'
		},
	]
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
				<Container>
					<Navbar.Brand as={Link} to="/all">MOVIE</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<NavDropdown title="Sort" id="collasible-nav-dropdown">
								{
									sorts.map((sort, i) => {
										return (
											<NavDropdown.Item as={Link} to={sort.name} key={i}>{sort.name}</NavDropdown.Item>
										)
									})
								}
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Gnb;