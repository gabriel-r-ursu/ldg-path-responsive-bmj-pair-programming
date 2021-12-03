import { StyledLatestArticlesTitle } from "../../styles/HeadlinesStyles/SecondaryTitle.styled";
import StyledLatestArticlesCategory from "../../styles/LatestArticles/LatestArticlesCategory.styled";

const LatestArticlesCategory: React.FC = (): JSX.Element => {
  return (
    <StyledLatestArticlesCategory>
      <StyledLatestArticlesTitle>Latest Articles</StyledLatestArticlesTitle>
    </StyledLatestArticlesCategory>
  );
};

export default LatestArticlesCategory;
