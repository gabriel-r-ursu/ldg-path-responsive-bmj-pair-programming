import StyledHeadlineTitles from "../../styles/HeadlinesStyles/HeadlineTitles.styled";
import HeadlineTitleContent from "../Headlines/HeadlineTitleContent";

const HealthArticleTitles: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlineTitles>
      <HeadlineTitleContent />
      <HeadlineTitleContent />
      <HeadlineTitleContent />
      <HeadlineTitleContent />
    </StyledHeadlineTitles>
  );
};

export default HealthArticleTitles;
