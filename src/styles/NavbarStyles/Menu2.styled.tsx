import styled from "styled-components";

const Menu2Wrapper = styled.ul`
  display: none;

  @media (min-width: 1280px) {
    margin: 0;
    padding: 0;

    display: flex;
    gap: 1rem;
    list-style: none;
    color: white;
  }
`;

export default Menu2Wrapper;
