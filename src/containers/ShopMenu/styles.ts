import styled from "styled-components";
import { colors } from "../../styles/colors";

export const MenuContainer = styled.section`

    h3 {
        font-size: 28px;
    }
`

export const MenuList = styled.ul`
    list-style: none;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
`

export const FullScreen = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
`

export const Modal = styled.div`
    z-index: 5;
    background-color: ${colors.neutral};
    max-width: 860px;
    width: 100%;
    margin: 0 10px;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    gap: 20px;
    position: relative;

    .close {
        width: 20px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-20px, 20px);
        cursor: pointer;
    }

    .foodPic {
        width: 360px;
    }

    .modalContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h4 {
            font-size: 30px;
            margin-bottom: 16px;
        }

        p {
            line-height: 1.5;
        }
    }

    .purchaseContainer {
        display: flex;
        justify-content: space-between;
        align-items: end;

        .oldPrice {
            text-decoration: line-through;
            color: ${colors.pills};
            font-size: 20px;
        }

        .price {
            font-size: 28px;
        }
    }

    .cartControler {
        display: flex;
        

        button {
            background-color: ${colors.star};
            width: 40px;
            height: 40px;
            font-size: 24px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }

        .counter {
            width: 40px;
            height: 40px;
            font-size: 24px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
    }
`