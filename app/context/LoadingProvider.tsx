"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

const emptySubscribe = () => () => {};
const getClientShouldLoad = () => !sessionStorage.getItem("hasLoadedInitial");
const getServerShouldLoad = () => true;

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const shouldShowLoader = useSyncExternalStore(
    emptySubscribe,
    getClientShouldLoad,
    getServerShouldLoad
  );
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const activeLoading = shouldShowLoader && isLoading;

  const value = useMemo<LoadingType>(
    () => ({
      isLoading: activeLoading,
      setIsLoading,
      setLoading,
    }),
    [activeLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {activeLoading && (
        <div className="initial-loader-root">
          <Loading percent={loading} />
        </div>
      )}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
