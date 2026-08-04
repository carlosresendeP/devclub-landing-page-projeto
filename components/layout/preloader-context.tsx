"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface PreloaderContextValue {
  isReady: boolean;
  markReady: () => void;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  isReady: false,
  markReady: () => {},
});

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isReady, markReady: () => setIsReady(true) }}>
      {children}
    </PreloaderContext.Provider>
  );
}

/** True once the preloader has finished and started revealing the page. */
export function usePreloaderReady() {
  return useContext(PreloaderContext).isReady;
}

export function useMarkPreloaderReady() {
  return useContext(PreloaderContext).markReady;
}
