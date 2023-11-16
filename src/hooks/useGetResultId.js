import { useResultIdContext } from "../context/ResultIdContext"

export const useGetResultId = () => {
    const [resultId, setResultId] = useResultIdContext()

    const dispatchId = (resultId) => setResultId(resultId)

    return {
        resultId,
        dispatchId
    }
}