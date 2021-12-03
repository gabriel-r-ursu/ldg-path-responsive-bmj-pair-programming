import StyledLatestArticlesCategory from "../../styles/LatestArticles/LatestArticlesCategory.styled";
import {
  StyledArticleTitle,
  CategoryTitle,
} from "../../styles/HeadlinesStyles/ArticleTitle.styled";
import SecondaryHeadlineImg from "../Headlines/SecondaryHeadlineImg";

const LatestArticlesCategory: React.FC = (): JSX.Element => {
  return (
    <StyledLatestArticlesCategory>
      <CategoryTitle>Lorem</CategoryTitle>
      <SecondaryHeadlineImg></SecondaryHeadlineImg>
      <StyledArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </StyledArticleTitle>
      <StyledArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </StyledArticleTitle>
      <StyledArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </StyledArticleTitle>
      <StyledArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </StyledArticleTitle>
      <StyledArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </StyledArticleTitle>
      <StyledArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </StyledArticleTitle>
      {/*
      border top
      */}
    </StyledLatestArticlesCategory>
  );
};

export default LatestArticlesCategory;
