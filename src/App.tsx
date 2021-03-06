import { Ad } from "./components/Ad/Ad";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Headlines from "./components/Headlines/Headlines";
import AppWrapper from "./styles/AppWrapper.styled";
import LatestArticles from "./components/LatestArticles/LatestArticles";
import HealthArticles from "./components/HealthArticles/HealthArticles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Ad />
      <Header />
      <Navbar />
      <AppWrapper>
        <Headlines />
        <LatestArticles />
        <HealthArticles />
      </AppWrapper>
    </>
  );
}

export default App;
