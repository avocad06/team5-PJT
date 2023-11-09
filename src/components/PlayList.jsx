import axios from "axios";
import { useEffect, useState } from "react";
import { searchVideoResults } from "../api/Playlist";
import PlayListItem from "./playlist/PlayListItem";

export default function PlayList({ query }) {
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
    // fetchSearchResult();
    async function fetchVideo() {
      const videoData = await searchVideoResults("청소하기 플레이리스트");
      setAllVideoData(videoData);
    }

    fetchVideo();
  }, [query]);
  return (
    <>
      {allVideoData.map((video) => (
        <PlayListItem videoContent={video} key={video.id} />
      ))}
    </>
  );
}
