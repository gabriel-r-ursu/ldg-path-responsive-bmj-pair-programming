import StyledHeadlines from "../../styles/HeadlinesStyles/Headlines.styled";
import MainHeadlines from "./MainHeadline";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlines>
      <MainHeadlines />
    </StyledHeadlines>
  );
};

export default Headlines;
