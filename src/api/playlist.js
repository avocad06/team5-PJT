import axios from "axios";

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/'

const request = axios.create({
    baseURL: BASE_URL,
    params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY
    }
})
/** 매개변수 videoIDs: [] */
const getVideos = async (arr) => {
    try {
        const getVideoRes = await request({
            method: 'GET',
            url: '/videos',
            params: {
                part: 'snippet, contentDetails, statistics',
                id: arr.join(','),
                fields: 'items(id, snippet(title, publishedAt), statistics(viewCount))',
            }
        })

        return getVideoRes?.data.items ?? null
    } catch (err) {
        console.log(err)
    }
}

/** 매개변수 query: string */
export const searchVideoResults = async (query) => {
    try {
        const searchVideoRes = await request({
            method: 'GET',
            url: '/search',
            params: {
                part: 'id',
                q: query,
                fields: 'items(id(videoId))'
            }
        })

        const videoIdData = searchVideoRes.data.items
        const videoIdList = videoIdData.map((v) => v.id.videoId)
        console.log(videoIdList)

        const videoData = await getVideos(videoIdList)
        console.log(videoData)

        return videoData ?? null
    } catch {

    }
}