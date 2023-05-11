import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState(fallbackValue);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
    setIsReady(true);
  }, [fallbackValue, key]);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, isReady]);

  return [value, setValue] as const;
}
