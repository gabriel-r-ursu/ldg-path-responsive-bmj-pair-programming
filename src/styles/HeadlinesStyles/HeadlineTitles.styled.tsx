import styled from "styled-components";

const StyledHeadlineTitles = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export default StyledHeadlineTitles;
