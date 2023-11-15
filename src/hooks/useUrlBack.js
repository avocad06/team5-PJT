import { useMatches, useNavigate } from "react-router-dom"

export function useUrlBack() {
    const currentUrlMatches = useMatches()

    const { params } = currentUrlMatches[0], navigate = useNavigate()

    const handleClickBack = () => {
        if ('questionId' in params) {
            const questionId = params.questionId
            navigate(parseInt(questionId) === 1 ? '/' : `/question/${parseInt(params.questionId) - 1}`)
        }
    }

    return {
        handleClickBack
    }
}