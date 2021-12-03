import ArticleWrapper from "../../styles/HeadlinesStyles/ArticleWrapper.styled";
import StyledMainHeadline from "../../styles/HeadlinesStyles/MainHeadline.styled";
import Article from "./Article";
import MainHeadlineImg from "./MainHeadlineImg";
import {
  StyledTitle,
  StyledDesktopTitle,
} from "../../styles/HeadlinesStyles/Title.styled";

const MainHeadline: React.FC = (): JSX.Element => {
  return (
    <StyledMainHeadline>
      <StyledTitle>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        dicta.
      </StyledTitle>
      <ArticleWrapper>
        <div>
          <StyledDesktopTitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, dicta.
          </StyledDesktopTitle>
          <Article />
        </div>
        <MainHeadlineImg />
      </ArticleWrapper>
    </StyledMainHeadline>
  );
};

export default MainHeadline;
