import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const Header = styled.header`
    background-color: ${colors.neutral};
    width: 100%;

    .headerContainer {
        height: 120px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: ${screenSize.phone}) {
            justify-content: center;
        }
    }

    .logo {
        height: 90px;
    }
`

export const Menu = styled.nav`

    ul {
        list-style: none;
        display: flex;
        gap: 32px;
        align-items: center;

        li {
            cursor: pointer;
            position: relative;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .cart {
        width: 40px;
    }

    .bubble {
        width: 20px;
        height: 20px;
        background-color: red;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(8px, -8px);
        padding: 4px;
        font-size: 12px;
        text-align: center;
        border-radius: 50%;
    }

    @media (max-width: ${screenSize.phone}) {
        display: none;
    }
`