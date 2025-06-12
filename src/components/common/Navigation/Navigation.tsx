import { Nav, NavList, NavItem, Link } from './Navigation.styles';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/grid">Grid Example</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;