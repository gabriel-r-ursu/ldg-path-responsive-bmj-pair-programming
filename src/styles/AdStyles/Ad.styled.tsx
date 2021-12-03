import styled from "styled-components";

export const StyledAd = styled.div`
  background-color: #8bc59a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeaderAd = styled(StyledAd)`
  height: 6rem;
`;

export const StyledMiddleAd = styled(StyledAd)`
  height: 600px;
  width: 300px;
`;
