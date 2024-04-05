import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
    background-color: ${colors.neutral};
    width: 100%;
    height: 120px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        height: 90px;
    }
`

export const Tray = styled.div`
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        width: 100%;
    }

    .bubble {
        background-color: red;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-10px, 16px);
        text-align: center;
        font-size: 12px;
        padding: 4px;
    }
`