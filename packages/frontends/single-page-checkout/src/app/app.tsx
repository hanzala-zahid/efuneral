import { RecoilRoot } from "recoil";
import PageRouter from "./components/routing/page-router/page-router";

export function App() {
  return (
    <RecoilRoot>
      <PageRouter />
    </RecoilRoot>
  );
}

export default App;
