import StyledHeader from "../../styles/HeaderStyles/Header.styled";
import Login from "./Login";

const Header: React.FC = (): JSX.Element => {
  return (
    <StyledHeader>
      <span>Intended for healthcare professionals</span>
      <Login />
    </StyledHeader>
  );
};

export default Header;
