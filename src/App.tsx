import { Ad } from "./components/Ad/Ad";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Ad />
      <Header />
      <Navbar />
    </>
  );
}

export default App;
