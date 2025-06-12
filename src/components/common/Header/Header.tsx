import { HeaderContainer, HeaderTitle } from './Header.styles';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>AG Grid Testing App</HeaderTitle>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;