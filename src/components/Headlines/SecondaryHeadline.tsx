import StyledSecondaryHeadline from "../../styles/HeadlinesStyles/SecondaryHeadline.styled";
import {
  SecondaryTitle,
  SecondaryDesktopTitle,
} from "../../styles/HeadlinesStyles/SecondaryTitle.styled";
import ContentWrapper from "../../styles/HeadlinesStyles/SecondaryHeadlineContent.styled";
import Date from "./Date";
import SecondaryArticle from "./SecondaryArticle";
import SecondaryHeadlineImg from "./SecondaryHeadlineImg";

const SecondaryHeadline: React.FC = (): JSX.Element => {
  return (
    <StyledSecondaryHeadline>
      <SecondaryTitle>Secondary Article Title </SecondaryTitle>
      <ContentWrapper>
        <SecondaryArticle />
        <SecondaryDesktopTitle>Secondary Article Title</SecondaryDesktopTitle>
        <SecondaryHeadlineImg />
      </ContentWrapper>
      <Date />
    </StyledSecondaryHeadline>
  );
};

export default SecondaryHeadline;
