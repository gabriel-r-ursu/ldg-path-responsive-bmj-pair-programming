import styled from "styled-components";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export default ContentWrapper;
