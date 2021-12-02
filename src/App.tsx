import { Ad } from "./components/Ad/Ad";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Headlines from "./components/Headlines/Headlines";

function App() {
  return (
    <>
      <GlobalStyle />
      <Ad />
      <Header />
      <Navbar />
      <Headlines />
    </>
  );
}

export default App;
