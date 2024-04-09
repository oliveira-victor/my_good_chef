import { BrowserRouter } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import GlobalStyle, { Wrapper } from "./styles";
import Pages from "./routes";
/* import ShopPage from "./pages/ShopPage" */;

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Pages />
        {/* <ShopPage /> */}
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
