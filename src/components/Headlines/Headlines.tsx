import StyledHeadlines from "../../styles/HeadlinesStyles/Headlines.styled";
import MainHeadlines from "./MainHeadlines";
import SecondaryHeadlines from "./SecondaryHeadlines";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlines>
      <MainHeadlines />
      <SecondaryHeadlines />
    </StyledHeadlines>
  );
};

export default Headlines;
