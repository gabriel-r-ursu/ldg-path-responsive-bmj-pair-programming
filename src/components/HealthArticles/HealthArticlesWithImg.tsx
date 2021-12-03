import { StyledHealthContent } from "../../styles/HeadlinesStyles/Article.styled";
import { StyledArticleTitle } from "../../styles/HeadlinesStyles/ArticleTitle.styled";
import StyledMainImg from "../../styles/HeadlinesStyles/MainHeadlineImg.styled";
import StyledArticlesWithImg from "../../styles/HealthArticles/ArticlesWithImg.styled";
import StyledLowerDetails from "../../styles/HeadlinesStyles/LowerDetails.styled";
import Category from "../Headlines/Category";
import Date from "../Headlines/Date";

const HealthArticlesWithImg: React.FC = (): JSX.Element => {
  return (
    <StyledArticlesWithImg>
      <StyledArticleTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ducimus
        repellendus fuga eius.
      </StyledArticleTitle>
      <StyledHealthContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
        recusandae enim facere maiores quisquam iste soluta, quasi ullam
        delectus pariatur.
      </StyledHealthContent>
      <StyledLowerDetails>
        <Category />
        <Date />
      </StyledLowerDetails>
      <StyledMainImg />
    </StyledArticlesWithImg>
  );
};

export default HealthArticlesWithImg;
