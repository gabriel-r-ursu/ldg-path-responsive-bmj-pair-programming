import { StyledMiddleAd } from "../../styles/AdStyles/Ad.styled";
import StyledHealthArticles from "../../styles/HealthArticles/HealthArticles.styled";
import HealthArticlesContent from "./HealthArticlesContent";

const HealthArticles: React.FC = (): JSX.Element => {
  return (
    <StyledHealthArticles>
      <HealthArticlesContent />
      <StyledMiddleAd>
        <span>Middle Ad Component</span>
      </StyledMiddleAd>
    </StyledHealthArticles>
  );
};

export default HealthArticles;
