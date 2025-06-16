import { NavLink } from 'react-router-dom';
import { GridNav, GridNavList, GridNavItem } from './Grid.styles';

const GridNavigation = () => {
  return (
    <GridNav>
      <GridNavList>
        <GridNavItem>
          <NavLink to="/grid" end>Basic Grid</NavLink>
        </GridNavItem>
        <GridNavItem>
          <NavLink to="/grid/server-side">Server Side</NavLink>
        </GridNavItem>
        {/* other examples */}
      </GridNavList>
    </GridNav>
  );
};

export default GridNavigation;