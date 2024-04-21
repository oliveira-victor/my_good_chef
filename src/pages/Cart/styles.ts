import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const CartTitle = styled.h2`
    font-size: 38px;

    @media (max-width: ${screenSize.phone}) {
        text-align: center;
    }
`

export const EmptyCart = styled.div`
    margin-top: 30px;
    margin-bottom: 60px;
    text-align: center;
`

export const CartList = styled.ul`
    list-style: none;
    margin-top: 20px;
    padding-bottom: 20px;
`

export const CartItem = styled.li`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.pills};

    .itemContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .itemTitle {
        font-size: 26px;
    }

    .itemImg {
        width: 140px;
        height: 140px;
        background-size: cover;
        position: relative;
        transition: all .1s ease;
        border-radius: 20px 20px 0 20px;

        &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            transform: translateY(-2px);
        }

        .amount {
            background-color: rgba(255, 255, 255, 0.7);
            padding: 10px 14px;
            font-size: 20px;
            font-family: "Rowdies", sans-serif;
            position: absolute;
            bottom: 0;
            right: 0;
            border-radius: 30px 0 0 0;
        }
    }

    .priceContainer {
        span {
            display: block;
            margin-bottom: 6px;
        }
    }
`

export const BtnsContainer = styled.div`
    display: flex;
    gap: 10px;

    button {
        background-color: ${colors.star};
        width: 24px;
        height: 24px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    span {
        font-size: 20px;
    }
`

export const TotalContainer = styled.div`
    text-align: right;

    span {
        display: block;
        margin-bottom: 10px;
    }

    .checkoutBtn {
        background-color: ${colors.star};
        color: #fff;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        padding: 10px 20px;
        cursor: pointer;
    }

    @media (max-width: ${screenSize.phone}) {
        text-align: center;
    }
`