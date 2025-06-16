import styled from 'styled-components';

export const GridLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GridNav = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
`;

export const GridNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
`;

export const GridNavItem = styled.li`
  a {
    text-decoration: none;
    color: #6c757d;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e9ecef;
    }

    &.active {
      background-color: #3498db;
      color: white;
    }
  }
`;