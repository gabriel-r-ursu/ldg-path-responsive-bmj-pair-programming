import { $MiddleAd } from "../../styles/AdStyles/$Ad";
import StyledHealthArticles from "../../styles/HealthArticles/HealthArticles.styled";
import HealthArticlesContent from "./HealthArticlesContent";

const HealthArticles: React.FC = (): JSX.Element => {
  return (
    <StyledHealthArticles>
      <h1>The following section has not yet been styled.</h1>
      <HealthArticlesContent />
      <$MiddleAd>
        <span>Middle Ad Component</span>
      </$MiddleAd>
    </StyledHealthArticles>
  );
};

export default HealthArticles;
