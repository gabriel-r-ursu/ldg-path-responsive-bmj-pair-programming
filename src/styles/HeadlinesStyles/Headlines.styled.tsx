import styled from "styled-components";

const StyledHeadlines = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 80% 20%;
  }
`;

export default StyledHeadlines;
