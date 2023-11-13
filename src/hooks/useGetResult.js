import { useNavigate, useParams } from "react-router-dom"
import { surveyResults } from "../const/result";
import { useState } from "react";
import { getRandomIndex } from "../pages/Result";

export function useGetResult() {

    const navigate = useNavigate();

    const { resultId } = useParams();

    const resultActivity = surveyResults.find(
        (result) => resultId - 1 === result.id
    );

    const allResultIdList = surveyResults.map((result) => result.id + 1);

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

        navigate(`/result/${nextResultId}`);
    }

    return {
        resultActivity,
        handleRandomClick,
        navigate
    }
}
