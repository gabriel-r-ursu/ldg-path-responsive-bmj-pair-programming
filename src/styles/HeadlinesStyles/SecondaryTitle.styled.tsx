import styled from "styled-components";

export const SecondaryTitle = styled.h3`
  margin: 0;
  padding: 0.5rem 0;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const SecondaryDesktopTitle = styled(SecondaryTitle)`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;
