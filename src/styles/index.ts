import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { Link } from "react-router-dom";
import { screenSize } from "./screenSize";

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
        margin-left: auto;
        margin-right: auto;
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

    .fullscreen {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
    }

    .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modal {
        background-color: ${colors.neutral};
        max-width: 1024px;
        width: 100%;
        max-height: 90vh;
        margin: 0 10px;
        padding: 30px;
        border-radius: 20px;
        position: relative;
    }

    .close {
        width: 20px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-20px, 20px);
        cursor: pointer;

        @media (max-width: ${screenSize.phone}) {
            background-color: #fff;
            width: 40px;
            padding: 6px;
            border-radius: 50%;
            transform: translate(-10px, 10px);
        }
    }

    .fadeIn { animation: fadeIn .3s; }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const PageWrapper = styled.section`
    background-color: ${colors.neutral};
    max-width: 1440px;
    width: 96%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 30px;
    border-radius: 20px;
`

export default GlobalStyle