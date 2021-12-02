import StyledHeadlineTitles from "../../styles/HeadlinesStyles/HeadlineTitles.styled";
import HeadlineTitleContent from "./HeadlineTitleContent";

const HeadlineTitles: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlineTitles>
      <HeadlineTitleContent></HeadlineTitleContent>
      <HeadlineTitleContent></HeadlineTitleContent>
      <HeadlineTitleContent></HeadlineTitleContent>
      <HeadlineTitleContent></HeadlineTitleContent>
      <HeadlineTitleContent></HeadlineTitleContent>
      <HeadlineTitleContent></HeadlineTitleContent>
      <HeadlineTitleContent></HeadlineTitleContent>
    </StyledHeadlineTitles>
  );
};

export default HeadlineTitles;
