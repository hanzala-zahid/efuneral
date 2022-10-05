import { RecoilRoot } from "recoil";
import PageRouter from "./components/routing/page-routing/page-router";

export function App() {
  return (
  <RecoilRoot>
    <PageRouter />
  </RecoilRoot>
  );
}

export default App;
