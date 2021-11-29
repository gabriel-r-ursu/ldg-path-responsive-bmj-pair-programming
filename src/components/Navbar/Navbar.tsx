import StyledNavbar from "../../styles/NavbarStyles/Navbar.styled";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <BurgerMenu />
      <Logo />
      <Search />
    </StyledNavbar>
  );
};

export default Navbar;
