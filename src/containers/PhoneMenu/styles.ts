import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";
import { Link } from "react-router-dom";

export const PhoneMenu = styled.div`
    display: none;

    @media (max-width: ${screenSize.phone}) {
        display: block;
        background-color: ${colors.neutral};
        position: fixed;
        width: 100%;
        height: 60px;
        padding: 8px;
        bottom: 0;
        left: 0;
        z-index: 2;
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.3);
    }
`

export const MenuList = styled.nav`
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;

        /* li {
            width: 80px;
            font-size: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            align-items: center;
            position: relative;
        } */
    }

    .menuIcon {
        height: 24px;
    }

    .heart {
        filter: invert(1);
    }

    .smallBubble {
        background-color: red;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(50px, -2px);
    }
`

export const MenuLink = styled(Link)`
    width: 80px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    position: relative;
    text-decoration: none;
    color: inherit;
`