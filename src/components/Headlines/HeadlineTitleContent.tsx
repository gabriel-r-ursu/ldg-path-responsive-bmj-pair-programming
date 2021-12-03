import { StyledArticleTitle } from "../../styles/HeadlinesStyles/ArticleTitle.styled";
import StyledHeadlineTitleContent from "../../styles/HeadlinesStyles/HeadlineTitleContent.styled";
import StyledLowerDetails from "../../styles/HeadlinesStyles/LowerDetails.styled";
import Category from "./Category";
import Date from "./Date";

const HeadlineTitleContent: React.FC = (): JSX.Element => {
  return (
    <StyledHeadlineTitleContent>
      <StyledArticleTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </StyledArticleTitle>
      <StyledLowerDetails>
        <Category />
        <Date />
      </StyledLowerDetails>
    </StyledHeadlineTitleContent>
  );
};

export default HeadlineTitleContent;
