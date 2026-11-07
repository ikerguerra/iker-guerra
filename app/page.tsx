import { LoadingProvider } from "./context/LoadingProvider";
import CharacterModel from "./components/Character";
import MainContainer from "./components/MainContainer";

export default function Home() {
  return (
    <LoadingProvider>
      <MainContainer>
        <CharacterModel />
      </MainContainer>
    </LoadingProvider>
  );
}
