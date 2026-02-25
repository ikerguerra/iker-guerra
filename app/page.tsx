import Image from "next/image";
import { lazy, Suspense } from "react";
import { LoadingProvider } from "./context/LoadingProvider";

import CharacterModel from "./components/Character";

const MainContainer = lazy(() => import("./components/MainContainer"));
export default function Home() {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <CharacterModel />
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};
