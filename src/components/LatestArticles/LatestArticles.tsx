import StyledLatestArticles from "../../styles/LatestArticles/LatestArticles.styled";
import LatestArticlesCategory from "./LatestArticlesCategory";

const LatestArticles: React.FC = (): JSX.Element => {
  return (
    <StyledLatestArticles>
      <LatestArticlesCategory />
      <LatestArticlesCategory />
      <LatestArticlesCategory />
      <LatestArticlesCategory />
    </StyledLatestArticles>
  );
};

export default LatestArticles;
