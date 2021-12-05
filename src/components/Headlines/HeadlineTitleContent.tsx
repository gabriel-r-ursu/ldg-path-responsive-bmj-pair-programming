import { $ArticleTitle } from "../../styles/HeadlinesStyles/$ArticleTitle";
import StyledHeadlineTitleContent from "../../styles/HeadlinesStyles/HeadlineTitleContent.styled";
import StyledLowerDetails from "../../styles/HeadlinesStyles/LowerDetails.styled";
import Category from "./Category";
import Date from "./Date";

const HeadlineTitleContent: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlineTitleContent>
      <$ArticleTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </$ArticleTitle>
      <StyledLowerDetails>
        <Category />
        <Date />
      </StyledLowerDetails>
    </StyledHeadlineTitleContent>
  );
};

export default HeadlineTitleContent;
