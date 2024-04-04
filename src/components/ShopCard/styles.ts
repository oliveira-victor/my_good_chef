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
    text-align: right;

    button {
        padding: 8px;
        background-color: ${colors.cardTag};
        color: #fff;
        font-family: "Comfortaa", sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`

export const CardContent = styled.div`
    padding: 10px 20px 20px 20px;
    height: 300px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-family: "Rowdies", sans-serif;
    text-align: center;
    margin-bottom: 10px;
    font-size: 36px;
    background: -webkit-linear-gradient(#fff282, #f0c617);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Description = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-size: 14px;
        line-height: 1.4;
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