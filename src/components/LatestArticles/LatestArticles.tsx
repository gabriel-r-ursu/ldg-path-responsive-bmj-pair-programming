import StyledLatestArticles from "../../styles/LatestArticles/LatestArticles.styled";
import LatestArticlesCategory from "./LatestArticlesCategory";
import { StyledLatestArticlesTitle } from "../../styles/HeadlinesStyles/SecondaryTitle.styled";

const LatestArticles: React.FC = (): JSX.Element => {
  return (
    <StyledLatestArticles>
      <StyledLatestArticlesTitle>Latest Articles</StyledLatestArticlesTitle>
      <LatestArticlesCategory />
      <LatestArticlesCategory />
      <LatestArticlesCategory />
      <LatestArticlesCategory />
    </StyledLatestArticles>
  );
};

export default LatestArticles;
