import axios from "axios";
import { useEffect, useState } from "react";
import { searchVideoResults } from "../api/playlist";
import PlayListItem from "./playlist/PlayListItem";
import styled from "styled-components";
import SubText from "./SubText";
import { useYoutubeQuery } from "../hooks/useYoutubeQuery";

const StyledPlayListWrapper = styled.div`
  display: flex;
  gap: 15px;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
`;

const StyledPlayList = styled.section`
  padding: 60px 0;
  ${StyledPlayListWrapper} {
    margin-top: 100px;
  }
`;

export default function PlayList({ multiplePlayList, query }) {
  const resultPlayList = useYoutubeQuery({
    query,
    options: {},
  });

  return (
    <StyledPlayList>
      <SubText
        content={
          resultPlayList.data
            ? "관련 영상 추천해드려요!"
            : "영상을 불러올 수 없습니다."
        }
      />
      <StyledPlayListWrapper>
        {resultPlayList.data?.map((video) => (
          <PlayListItem videoContent={video} key={video.id} />
        ))}
      </StyledPlayListWrapper>
    </StyledPlayList>
  );
}
