import $ from "styled-components";

export const $Article = $.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  line-height: 1.5;
`;

export const $HealthContent = $($Article)`
  font-size: 0.8rem;
`;
