import StyledNavbar from "../../styles/NavbarStyles/Navbar.styled";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import Search from "./Search";
import LogoWrapper from "../../styles/NavbarStyles/LogoWrapper.styled";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <LogoWrapper>
        <BurgerMenu />
        <Logo />
        <Menu1 />
      </LogoWrapper>
      <LogoWrapper>
        <Menu2 />
        <Search />
      </LogoWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
