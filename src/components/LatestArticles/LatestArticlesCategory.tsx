import StyledLatestArticlesCategory from "../../styles/LatestArticles/LatestArticlesCategory.styled";
import {
  $ArticleTitle,
  $CategoryTitle,
} from "../../styles/HeadlinesStyles/$ArticleTitle";
import SecondaryHeadlineImg from "../Headlines/SecondaryHeadlineImg";

const LatestArticlesCategory: React.FC = (): JSX.Element => {
  return (
    <StyledLatestArticlesCategory>
      <$CategoryTitle>Lorem</$CategoryTitle>
      <SecondaryHeadlineImg></SecondaryHeadlineImg>
      <$ArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </$ArticleTitle>
      <$ArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </$ArticleTitle>
      <$ArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </$ArticleTitle>
      <$ArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </$ArticleTitle>
      <$ArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </$ArticleTitle>
      <$ArticleTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </$ArticleTitle>
      {/*
      border top
      */}
    </StyledLatestArticlesCategory>
  );
};

export default LatestArticlesCategory;
