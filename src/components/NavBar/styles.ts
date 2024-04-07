import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const Nav = styled.nav`
    background-color: ${colors.neutral};
    padding: 10px 0;
    border-top: 1px solid #e0e0e0;
`

export const NavContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;
    padding: 0 10px;

    @media (max-width: ${screenSize.phone}) {
        width: 90vw;
    }

    button {
        background-color: ${colors.pills};
        color: #fff;
        font-size: 16px;
        padding: 0 20px;
        height: 32px;
        border: 0;
        border-radius: 16px;
        cursor: pointer;
        transition: all .3s ease;

        &:hover {
            background-color: ${colors.pillsHover};
        }
    }
`