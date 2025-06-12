import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin-top: 1rem;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const Link = styled(RouterLink)`
  color: #ecf0f1;
  text-decoration: none;
  font-weight: 500;
  // padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #3498db;
  }
`;