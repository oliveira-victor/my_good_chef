import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${colors.main};
        background-image: url('https://raw.githubusercontent.com/oliveira-victor/my_good_chef/main/src/assets/images/bg.svg');
        min-height: 100vh;
        font-family: "Comfortaa", sans-serif;
    }

    .container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;
    }

    .loader {
        padding: 50px 0;
    }

    .shopTitle {
        font-family: "Rowdies", sans-serif;
        background: -webkit-linear-gradient(#fff282, #f0c617);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
`

export default GlobalStyle