import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  line-height: 1.5;
`;

export const StyledHealthContent = styled(StyledArticle)`
  font-size: 0.8rem;
`;
