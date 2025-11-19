import { Link } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <BSNavbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container>
        <BSNavbar.Brand as={Link} to="/">PAWdoption</BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default NavBar;