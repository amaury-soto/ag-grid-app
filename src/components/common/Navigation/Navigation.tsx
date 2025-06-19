import { Nav, NavList, NavItem, Link } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/grid">Grid</Link>
        </NavItem>
        <NavItem>
          <Link to="/form">Form </Link>
        </NavItem>
        <NavItem>
          <Link to="/form-watch">Form useWatch </Link>
        </NavItem>
        <NavItem>
          <Link to="/redux">Redux</Link>
        </NavItem>
        <NavItem>
          <Link to="/graphql">GraphQL Example</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
