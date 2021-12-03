import styled from "styled-components";

const ArticleWrapper = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (min-width: 960px) {
  }
`;

export default ArticleWrapper;
