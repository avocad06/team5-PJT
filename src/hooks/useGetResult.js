import { useNavigate } from "react-router-dom"
import { surveyResults } from "../const/result";
import { useState } from "react";
import { getRandomIndex } from "../pages/Result";
import { useResultIdContext } from "../context/ResultIdContext";
import { v4 as uuidv4 } from 'uuid';

export function useGetResult() {

    const navigate = useNavigate();

    const [resultId, dispatchId] = useResultIdContext()

    function getResultQuery(id) {
        const result = surveyResults.find((result) => parseInt(id) === result.id)
        console.log(result)

        if (result.isOutside) return

        const resultQuery = result.activityName

        return resultQuery ?? ''
    }

    const resultActivity = surveyResults.find(
        (result) => resultId === result.id
    );

    const allResultIdList = surveyResults.map((result) => result.id);

    const [resultHistory, setResultHistory] = useState([parseInt(resultId)]);

    const handleRandomClick = () => {
        const undisplayedResult = allResultIdList.reduce((prev, current) => {
            if (parseInt(resultId) === current) return prev;

            if (resultHistory.includes(current)) {
                return prev;
            }

            return [...prev, current];
        }, []);

        const nextResultId = getRandomIndex(
            (!!undisplayedResult.length && undisplayedResult) || allResultIdList.filter((id) => id !== parseInt(resultId))
        );

        setResultHistory(undisplayedResult.length === 0 ? [nextResultId] : [...resultHistory, nextResultId])

        dispatchId(nextResultId)
        navigate(`/result/${uuidv4()}`);
    }

    return {
        resultActivity,
        handleRandomClick,
        getResultQuery,
        navigate,
        resultId
    }
}
