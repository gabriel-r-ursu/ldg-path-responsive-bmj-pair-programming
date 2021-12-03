import styled from "styled-components";

const StyledLatestArticlesCategories = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default StyledLatestArticlesCategories;
