import { Outlet } from 'react-router-dom';
import  GridNavigation  from './GridNavigation';
import { GridLayoutContainer } from './Grid.styles';

const GridLayout = () => {
  return (
    <GridLayoutContainer>
      <GridNavigation />
      <Outlet />
    </GridLayoutContainer>
  );
};

export default GridLayout;