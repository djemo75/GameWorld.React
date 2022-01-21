import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { STATIC_ROUTES } from '../Routes';

const Navigation = () => {
  const location = useLocation();
  const NAVIGATION_ITEMS = [
    {
      label: 'Home',
      to: STATIC_ROUTES.home,
    },
    {
      label: 'Forum',
      to: STATIC_ROUTES.forum,
    },
    {
      label: 'Contacts',
      to: STATIC_ROUTES.contacts,
    },
  ];

  const isPathActive = (path) => {
    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  const links = NAVIGATION_ITEMS.map((item, index) => (
    <Link
      className={`nav-link ${isPathActive(item.to) ? 'active' : ''}`}
      to={item.to}
      key={index}
    >
      {item.label}
    </Link>
  ));

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="GameWorld"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ marginRight: '7px' }}
          />
          GameWorld
        </Navbar.Brand>
        <Nav className="me-auto">{links}</Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
