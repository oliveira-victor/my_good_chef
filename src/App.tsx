import { BrowserRouter } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import GlobalStyle, { Wrapper } from "./styles";
import Pages from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
/* import ShopPage from "./pages/ShopPage" */;

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Pages />
          {/* <ShopPage /> */}
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default App
