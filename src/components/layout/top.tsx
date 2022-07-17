import {
  Container,
  Navbar
} from "react-bootstrap";

export function UnauthenticatedNav() {
  return (
    <Navbar bg="dark" className="shadow-sm row" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="text-muted">
          <strong>SAPIEN SYSTEMS</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
