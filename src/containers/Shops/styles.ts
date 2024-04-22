import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const Nav = styled.nav`
    background-color: ${colors.neutral};
    padding: 10px 0;
    border-top: 1px solid #e0e0e0;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 3;
`

export const NavContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    overflow-x: auto;
    gap: 10px;
    padding: 0 10px;

    @media (max-width: ${screenSize.phone}) {
        width: 90vw;
        justify-content: left;
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

    .activeBtn {
        background-color: ${colors.star};
        color: #000;

        &:hover {
            background-color: ${colors.star};
            color: #000;
        }
    }
`

export const Shops = styled.section`
    margin: 40px auto;
`

export const ShopsList = styled.ul`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
`