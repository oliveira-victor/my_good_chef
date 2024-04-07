import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CardContainer = styled.div`
    width: 310px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }
`

export const Image = styled.div`
    width: 100%;
    height: 300px;
    background-size: cover;
    border-radius: 10px 10px 0 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        border: none;
        border-radius: 8px;
        cursor: pointer;
        padding: 8px;
        font-family: "Comfortaa", sans-serif;
    }

    .mainTagContainer {
        text-align: right;

        img {
            width: 10px;
            margin-right: 4px;
        }

        .vegan {
            background-color: #fff;
            color: green;;
        }

        .mainTag {
            background-color: ${colors.cardTag};
            color: #fff;
            text-transform: uppercase;
            font-weight: bold;
            margin-left: 6px;
        }
    }

    .mealsTagContainer {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        list-style: none;

        .mealTag {
            background-color: rgba(255, 255, 255, 0.7);
        }
    }
`

export const CardContent = styled.div`
    padding: 10px 20px 20px 20px;
    height: 300px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    font-size: 30px;
`

export const Description = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-size: 14px;
        line-height: 1.46;
    }
`

export const Rating = styled.div`
    gap: 4px;
    display: flex;
    justify-content: end;
    align-items: center;

    span {
        font-size: 24px;
        margin-right: 4px;
    }

    img {
        height: 30px;
        transform: translateY(-2px);
    }
`