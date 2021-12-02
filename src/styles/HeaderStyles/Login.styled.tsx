import styled from "styled-components";

const StyledLogin = styled.ul`
  display: none;

  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    height: 2rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    padding-right: 1rem;
    list-style: none;
    background-color: #e5e6e6;
    color: #4f89c7;
  }
`;

export default StyledLogin;
