import StyledHeadlines from "../../styles/HeadlinesStyles/Headlines.styled";
import HeadlineTitles from "./HeadlineTitles";
import MainHeadlines from "./MainHeadlines";
import SecondaryHeadlines from "./SecondaryHeadlines";
import StyledArticle from "../../styles/HeadlinesStyles/Article.styled";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlines>
      <StyledArticle>
        <MainHeadlines />
        <SecondaryHeadlines />
      </StyledArticle>
      <HeadlineTitles />
    </StyledHeadlines>
  );
};

export default Headlines;
