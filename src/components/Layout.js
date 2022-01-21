import { Container } from 'react-bootstrap';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container className="mt-5">{children}</Container>
    </>
  );
};

export default Layout;
