import { createContext, useContext, useState } from "react";

const ResultIdContext = createContext();

export function useResultIdContext() {
  return useContext(ResultIdContext);
}

export function ResultIdProvider({ children }) {
  const [resultId, setResultId] = useState(1);
  return (
    <ResultIdContext.Provider value={[resultId, setResultId]}>
      {children}
    </ResultIdContext.Provider>
  );
}
