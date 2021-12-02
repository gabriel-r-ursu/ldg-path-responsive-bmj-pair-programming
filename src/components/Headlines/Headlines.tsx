import StyledHeadlines from "../../styles/HeadlinesStyles/Headlines.styled";
import HeadlineTitles from "./HeadlineTitles";
import MainHeadlines from "./MainHeadlines";
import SecondaryHeadlines from "./SecondaryHeadlines";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlines>
      <MainHeadlines />
      <SecondaryHeadlines />
      <HeadlineTitles />
    </StyledHeadlines>
  );
};

export default Headlines;
