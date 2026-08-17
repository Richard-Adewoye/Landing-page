import React, { createContext, useContext, useState, useCallback } from "react";

interface InteractionContextType {
  progress: number;
  setProgress: (val: number | ((prev: number) => number)) => void;
  recordInteraction: (amount?: number) => void;
  resetProgress: () => void;
}

const InteractionContext = createContext<InteractionContextType>({
  progress: 15,
  setProgress: () => {},
  recordInteraction: () => {},
  resetProgress: () => {},
});

export const InteractionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgressState] = useState(18);

  const setProgress = useCallback((val: number | ((prev: number) => number)) => {
    setProgressState((prev) => {
      const next = typeof val === "function" ? val(prev) : val;
      return Math.min(100, Math.max(0, next));
    });
  }, []);

  const recordInteraction = useCallback((amount = 8) => {
    setProgressState((prev) => Math.min(100, prev + amount));
  }, []);

  const resetProgress = useCallback(() => {
    setProgressState(18);
  }, []);

  return (
    <InteractionContext.Provider
      value={{
        progress,
        setProgress,
        recordInteraction,
        resetProgress,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => useContext(InteractionContext);
