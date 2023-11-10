import axios from "axios";
import { useEffect, useState } from "react";
import { searchVideoResults } from "../api/Playlist";
import PlayListItem from "./playlist/PlayListItem";
import styled from "styled-components";
import SubText from "./SubText";

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
  const [allVideoData, setAllVideoData] = useState([]);
  const fetchSearchResult = async () => {
    try {
      //   const searchResponse = await axios.get("/mock/search-result.json");
      const searchResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${
          import.meta.env.VITE_YOUTUBE_API_KEY
        }`
      );
      console.log(searchResponse);
    } catch (err) {}
  };

  useEffect(() => {
    async function fetchVideo() {
      const videoData = await searchVideoResults(query);
      setAllVideoData(multiplePlayList ? videoData : [videoData[0]]);
    }

    fetchVideo();
  }, [query]);
  return (
    <StyledPlayList>
      <SubText content={"관련 영상 추천해드려요!"} />
      <StyledPlayListWrapper>
        {allVideoData.map((video) => (
          <PlayListItem videoContent={video} key={video.id} />
        ))}
      </StyledPlayListWrapper>
    </StyledPlayList>
  );
}
