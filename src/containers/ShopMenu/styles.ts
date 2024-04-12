import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const MenuContainer = styled.section`

    h3 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 30px;
    }
`

export const MenuSection = styled.div`
    margin-bottom: 60px;
    padding: 20px 10px;
    border: 1px solid ${colors.pills};
    border-radius: 20px;

    h4 {
        font-size: 24px;
    }

    @media (max-width: ${screenSize.phone}) {
        h4 {
            font-size: 20px;
            text-align: center;
        }
    }
`

export const MenuList = styled.ul`
    list-style: none;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;

    @media (max-width: ${screenSize.phone}) {
        gap:10px
    }
`

export const Modal = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: ${screenSize.phone}) {
        flex-direction: column;
        overflow-y: auto;
        height: fit-content;
    }

    .imageContainer {
        max-width: 360px;
        width: 100%;
        height: 360px;
        background-size: cover;
        background-position: center;

        .foodPic {
            width: 100%;
        }
        @media (max-width: ${screenSize.phone}) {
            margin:  0 auto;
            max-width: 80vw;
            height: 120px;
        }
    }

    .modalContent {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;

        h4 {
            font-size: 30px;
            margin-bottom: 16px;
        }

        p {
            line-height: 1.5;
        }

        @media (max-width: ${screenSize.phone}) {
            height: 100%;

            h4 {
                font-size: 20px;
                text-align: center;
            }

            p {
                font-size: 14px;
            }
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