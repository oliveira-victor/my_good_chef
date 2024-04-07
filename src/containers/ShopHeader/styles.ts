import styled from "styled-components";
import { colors } from "../../styles/colors";

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
        transform: translateY(4px);
        margin-left: 6px;
    }
`

export const BottomContainer = styled.div`
    display: grid;
    grid-template-columns: 340px auto;
    gap: 32px;
    margin-top: 10px;

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
`

export const Reviews = styled.div`
    .reviewList {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
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