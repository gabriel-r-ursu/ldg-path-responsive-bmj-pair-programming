import Menu1Wrapper from "../../styles/NavbarStyles/Menu1.styled";

const Menu1: React.FC = (): JSX.Element => {
  return (
    <Menu1Wrapper>
      <li>covid-19</li>
      <li>Research</li>
      <li>Education</li>
      <li>News&Views</li>
      <li>Campaigns</li>
      <li>Jobs</li>
    </Menu1Wrapper>
  );
};

export default Menu1;
