import styled from "styled-components";

const Menu1Wrapper = styled.ul`
  display: none;

  @media (min-width: 960px) {
    margin: 0;
    padding: 0;

    display: flex;
    gap: 1rem;
    list-style: none;
    color: white;
  }
`;

export default Menu1Wrapper;
