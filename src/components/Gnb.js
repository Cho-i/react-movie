import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Gnb() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<NavLink to="/" className="navbar-brand">MOVIE</NavLink>
					{/* <Navbar.Brand to="/">HOME</Navbar.Brand> */}
					{/* <Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav> */}
					{/* <Nav className="me-auto">
					{
						categories.map((category, i) => {
							return (
								<NavLink to={category.name} key={i} className="nav-link">{category.text}</NavLink>
							)
						})
					}
				</Nav> */}
				</Container>
			</Navbar>
		</>
	)
}

export default Gnb;