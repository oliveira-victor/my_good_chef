import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;

    h2 {
        font-size: 34px;
    }

    span {
        font-size: 26px;
    }

    img {
        width: 34px;
        margin-left: 6px;
    }
`

export const BottomContainer = styled.div`
    display: grid;
    grid-template-columns: 340px auto;
    gap: 32px;
    margin-top: 10px;

    @media (max-width: ${screenSize.phone}) {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .imgContainer {
        padding: 10px;
        border: 1px solid ${colors.pills};
        border-radius: 10px;
        height: fit-content;

        img {
            width: 100%;
            border-radius: 6px;
        }
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    p {
        font-size: 18px;
        line-height: 1.4;
    }

    @media (max-width: ${screenSize.phone}) {
        p {
            font-size: 14px;
        }
    }
`

export const Reviews = styled.div`
    .reviewList {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;

        @media (max-width: ${screenSize.phone}) {
            flex-wrap: nowrap;
            overflow-x: auto;
        }
    }

    .moreReviews {
        display: block;
        font-size: 14px;
        margin-top: 10px;
        padding: 4px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            background-color: #e6e6e6;
        }
    }
`

export const ReviewModal = styled.div`
    z-index: 5;
    max-width: 1000px;
    width: 96%;
    background-color: ${colors.neutral};

    ul {
        list-style: none;
        margin-top: 20px;
        max-height: 60vh;
        overflow-y: auto;

        img {
            border-radius: 50%;
            width: 68px;
            height: 68px;
            object-fit: cover;
        }

        li {
            display: flex;
            gap: 20px;
            padding: 16px;
            border-bottom: 1px solid ${colors.pills};
        }
    }
`

export const ReviewContent = styled.div`
    width: 100%;

    .reviewTItle {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;

        h4 {
            font-size: 20px;
        }

        @media (max-width: ${screenSize.phone}) {
            flex-direction: column;
            gap: 4px;
            
            h4 {
                font-size: 16px;
            }
        }
    }

    p {
        @media (max-width: ${screenSize.phone}) {
            font-size: 14px;
        }
    }
`