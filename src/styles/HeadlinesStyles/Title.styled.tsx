import styled from "styled-components";

export const StyledTitle = styled.h2`
  @media (min-width: 600px) {
    padding-top: 1rem;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

export const StyledDesktopTitle = styled(StyledTitle)`
  display: none;

  @media (min-width: 960px) {
    display: block;
  }
`;
