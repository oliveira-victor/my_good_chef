import Header from "./containers/Header";
import Shops from "./containers/Shops";
import GlobalStyle, { Wrapper } from "./styles";

function App() {

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Shops />
      </Wrapper>
    </>
  )
}

export default App
