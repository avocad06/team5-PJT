import styled from "styled-components";

export const StyledPlayListTitle = styled.p`
  font-size: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const StyledPlayListDescription = styled.span`
  font-size: 14px;
  color: var(--medium-gray-90);
`;
