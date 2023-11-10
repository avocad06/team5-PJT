/**videoContent
 * {
 * id: string;
 * snippet {
 * publishedAt: string;
 * title: string;
 * }
 * statistics{
 * viewCount: string;
 * }
 * }
 */

import styled from "styled-components";
import { StyledPlayListTitle, StyledPlayListDescription } from "./PlayListText";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 400px;
  max-width: 400px;
  padding: 0 20px;
  flex-shrink: 0;
`;

const StyledCardContent = styled.div``;

const StyledCardFooter = styled.div`
  color: var(--medium-gray-90);
`;

export default function PlayListItem({ videoContent }) {
  const { viewCount } = videoContent.statistics;
  const { publishedAt, title } = videoContent.snippet;
  return (
    <StyledCard>
      <iframe
        src={`https://www.youtube.com/embed/${videoContent.id}`}
        style={{
          borderRadius: "30px",
        }}
      ></iframe>
      <StyledCardContent>
        <StyledPlayListTitle>{title}</StyledPlayListTitle>
      </StyledCardContent>
      <StyledCardFooter>
        <StyledPlayListDescription>
          조회수 {viewCount}
        </StyledPlayListDescription>
        &nbsp;&middot;&nbsp;
        <StyledPlayListDescription>{publishedAt}</StyledPlayListDescription>
      </StyledCardFooter>
    </StyledCard>
  );
}
