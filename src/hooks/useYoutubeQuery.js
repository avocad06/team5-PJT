import { useQuery } from "@tanstack/react-query"
import { searchVideoResults } from "../api/playlist"
import { group3 } from "../const/result"
import { useGetResult } from "./useGetResult"

export const useYoutubeQuery = ({ query, options }) => {

    const { resultId, resultActivity } = useGetResult()

    const oneVideo = resultActivity.characterGroup === group3


    console.log("얘 실행될 필요가 없는디")
    console.log(query, options)

    return useQuery({
        queryKey: ['activity', resultId],
        queryFn: () => searchVideoResults(query, oneVideo),
        ...options
    })
}