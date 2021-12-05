import $Header from "../../styles/HeaderStyles/$Header";
import Login from "./Login";

const Header: React.FC = (): JSX.Element => {
  return (
    <$Header>
      <span>Intended for healthcare professionals</span>
      <Login />
    </$Header>
  );
};

export default Header;
