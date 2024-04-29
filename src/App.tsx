import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Pages from "./routes";
import { store } from "./store";
import Header from "./containers/Header";
import PhoneMenu from "./containers/PhoneMenu";
import Favorites from "./containers/Favorites";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./containers/Footer";

import GlobalStyle, { Wrapper } from "./styles";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Favorites />
          <PhoneMenu />
          <Pages />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default App
