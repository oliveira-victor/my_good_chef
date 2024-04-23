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

        @media (max-width: ${screenSize.phone}) {
            font-size: 20px;
        }
    }

    .itemImg {
        min-width: 140px;
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
            min-width: 54px;
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

    @media (max-width: ${screenSize.phone}) {
        text-align: center;
    }
`

export const FormContainer = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 30px auto;

    h3 {
        text-align: center;
        font-size: 24px;
    }

    label {
        display: block;
        margin-top: 30px;
    }

    input {
        width: 100%;
        height: 40px;
        margin-top: 6px;
        border: none;
        border-bottom: 2px solid ${colors.star};
        font-size: 20px;

        &.error {
            border: 2px solid red;
        }
    }

    .formDivision {
        display: grid;
        grid-template-columns: 25% auto;
        gap: 30px;
    }

    .formDivisionTrio {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }

    @media (max-width: ${screenSize.phone}) {
        label {
            font-size: 14px;
            margin-top: 10px;
        }

        input {
            font-size: 16px;
            margin-top: 4px;
        }
    }
`

export const FinalScreen = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 30px auto;

    img {
        width: 100px;
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;

        @media (max-width: ${screenSize.phone}) {
            width: 60px;
        }
    }

    h3 {
        font-size: 30px;
        margin-bottom: 20px;
        text-align: center;
    }

    span {
        display: block;
        text-align: center;
        margin-bottom: 20px;
        font-size: 20px;
    }

    p {
        line-height: 1.6;
    }
`

export const ProgressBar = styled.div`
    margin: 60px auto 30px auto;
    width: 80%;
    height: 24px;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    .fill {
        background: rgb(255,221,84);
        background: linear-gradient(0deg, rgba(255,221,84,1) 0%, rgba(252,255,138,1) 100%);
        height: 100%;
        border-radius: 12px;
        transition: all 2s ease;
    }
`