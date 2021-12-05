import { $MiddleAd } from "../../styles/AdStyles/$Ad";
import StyledHealthArticles from "../../styles/HealthArticles/HealthArticles.styled";
import HealthArticlesContent from "./HealthArticlesContent";

const HealthArticles: React.FC = (): JSX.Element => {
  return (
    <StyledHealthArticles>
      <HealthArticlesContent />
      <$MiddleAd>
        <span>Middle Ad Component</span>
      </$MiddleAd>
    </StyledHealthArticles>
  );
};

export default HealthArticles;
