import StyledHeadlines from "../../styles/HeadlinesStyles/Headlines.styled";
import HeadlineTitles from "./HeadlineTitles";
import MainHeadlines from "./MainHeadlines";
import SecondaryHeadlines from "./SecondaryHeadlines";
import { $Article } from "../../styles/HeadlinesStyles/$Article";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlines>
      <$Article>
        <MainHeadlines />
        <SecondaryHeadlines />
      </$Article>
      <HeadlineTitles />
    </StyledHeadlines>
  );
};

export default Headlines;
