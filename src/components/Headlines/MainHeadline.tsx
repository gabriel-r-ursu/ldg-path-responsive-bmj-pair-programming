import StyledMainHeadline from "../../styles/HeadlinesStyles/MainHeadline.styled";
import Article from "./Article";
import Title from "./Title";

const MainHeadline: React.FC = (): JSX.Element => {
  return (
    <StyledMainHeadline>
      <Title />
      <Article />
    </StyledMainHeadline>
  );
};

export default MainHeadline;
