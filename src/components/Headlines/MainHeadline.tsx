import ArticleWrapper from "../../styles/HeadlinesStyles/ArticleWrapper.styled";
import StyledMainHeadline from "../../styles/HeadlinesStyles/MainHeadline.styled";
import Article from "./Article";
import MainHeadlineImg from "./MainHeadlineImg";
import Title from "./Title";

const MainHeadline: React.FC = (): JSX.Element => {
  return (
    <StyledMainHeadline>
      <Title />
      <ArticleWrapper>
        <Article />
        <MainHeadlineImg />
      </ArticleWrapper>
    </StyledMainHeadline>
  );
};

export default MainHeadline;
