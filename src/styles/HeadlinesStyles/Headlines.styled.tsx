import styled from "styled-components";

const StyledHeadlines = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    padding-right: 0;
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 80% 20%;
  }
`;

export default StyledHeadlines;
