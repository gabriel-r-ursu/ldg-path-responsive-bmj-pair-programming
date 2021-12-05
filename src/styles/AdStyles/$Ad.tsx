import $ from "styled-components";

export const $Ad = $.div`
  background-color: #8bc59a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const $HeaderAd = $($Ad)`
  height: 6rem;
`;

export const $MiddleAd = $($Ad)`
  height: 600px;
  width: 18rem;
`;
