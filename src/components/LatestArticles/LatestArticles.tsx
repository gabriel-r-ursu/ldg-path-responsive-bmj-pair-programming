import StyledLatestArticles from "../../styles/LatestArticles/LatestArticles.styled";
import LatestArticlesCategory from "./LatestArticlesCategory";
import { StyledLatestArticlesTitle } from "../../styles/HeadlinesStyles/SecondaryTitle.styled";
import StyledLatestArticlesCategories from "../../styles/LatestArticles/LatestArticlesCategories.styled";

const LatestArticles: React.FC = (): JSX.Element => {
  return (
    <StyledLatestArticles>
      <StyledLatestArticlesTitle>Latest Articles</StyledLatestArticlesTitle>
      <StyledLatestArticlesCategories>
        <LatestArticlesCategory />
        <LatestArticlesCategory />
        <LatestArticlesCategory />
        <LatestArticlesCategory />
      </StyledLatestArticlesCategories>
    </StyledLatestArticles>
  );
};

export default LatestArticles;
