import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

import bg from '../assets/images/bg.svg'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${colors.main};
        background-image: url(${bg});
        min-height: 100vh;
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
`

export default GlobalStyle