import { $HealthContent } from "../../styles/HeadlinesStyles/$Article";
import { $ArticleTitle } from "../../styles/HeadlinesStyles/$ArticleTitle";
import StyledMainImg from "../../styles/HeadlinesStyles/MainHeadlineImg.styled";
import StyledArticlesWithImg from "../../styles/HealthArticles/ArticlesWithImg.styled";
import StyledLowerDetails from "../../styles/HeadlinesStyles/LowerDetails.styled";
import Category from "../Headlines/Category";
import Date from "../Headlines/Date";

const HealthArticlesWithImg: React.FC = (): JSX.Element => {
  return (
    <StyledArticlesWithImg>
      <$ArticleTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus
        repellendus fuga eius.
      </$ArticleTitle>
      <$HealthContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
        recusandae enim facere maiores quisquam iste soluta, quasi ullam
        delectus pariatur.
      </$HealthContent>
      <StyledLowerDetails>
        <Category />
        <Date />
      </StyledLowerDetails>
      <StyledMainImg />
    </StyledArticlesWithImg>
  );
};

export default HealthArticlesWithImg;
