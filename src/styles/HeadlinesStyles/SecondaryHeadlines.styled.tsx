import styled from "styled-components";

const StyledSecondaryHeadlines = styled.div`
  @media (min-width: 600px) {
    display: flex;
    gap: 2rem;
    border-bottom: 2px solid red;
    background-color: white;
  }

  @media (min-width: 960px) {
    border: none;
  }
`;

export default StyledSecondaryHeadlines;
