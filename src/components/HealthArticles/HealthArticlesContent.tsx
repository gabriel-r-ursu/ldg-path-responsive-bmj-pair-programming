import StyledHealthArticlesContent from "../../styles/HealthArticles/HealthArticlesContent.styled";
import HealthArticlesWithImg from "./HealthArticlesWithImg";
import HealthArticleTitles from "./HealthArticleTitles";
import { $CategoryTitle } from "../../styles/HeadlinesStyles/$ArticleTitle";

const HealthArticlesContent: React.FC = (): JSX.Element => {
  return (
    <StyledHealthArticlesContent>
      <$CategoryTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </$CategoryTitle>
      <HealthArticlesWithImg />
      <HealthArticleTitles />
      {/*
     ArticlesWithImg x2 > Title, Img, Content, category, date
  */}
    </StyledHealthArticlesContent>
  );
};

export default HealthArticlesContent;
