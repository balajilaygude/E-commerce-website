import { useState } from "react";
import { dares } from "../data/dares";

const STORAGE_KEY = "dare-history";

const getHistory = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return [];
    }

    return JSON.parse(saved);
  } catch {
    return [];
  }
};

export const useDares = () => {
  const [currentDare, setCurrentDare] = useState(null);

  const getNextDare = () => {
    let history = getHistory();

    let availableDares = dares.filter(
      (dare) => !history.includes(dare.id)
    );

    // If every dare has been shown, start a new cycle.
    if (availableDares.length === 0) {
      history = [];
      availableDares = [...dares];
    }

    const randomIndex = Math.floor(
      Math.random() * availableDares.length
    );

    const selectedDare = availableDares[randomIndex];

    const newHistory = [...history, selectedDare.id];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(newHistory)
    );

    setCurrentDare(selectedDare);
  };

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCurrentDare(null);
  };

  return {
    currentDare,
    getNextDare,
    clearHistory,
  };
};