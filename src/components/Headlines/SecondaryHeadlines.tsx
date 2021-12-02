import StyledSecondaryHeadlines from "../../styles/HeadlinesStyles/SecondaryHeadlines.styled";
import SecondaryHeadline from "./SecondaryHeadline";

const SecondaryHeadlines: React.FC = (): JSX.Element => {
  return (
    <StyledSecondaryHeadlines>
      <SecondaryHeadline />
      <SecondaryHeadline />
      <SecondaryHeadline />
    </StyledSecondaryHeadlines>
  );
};

export default SecondaryHeadlines;
