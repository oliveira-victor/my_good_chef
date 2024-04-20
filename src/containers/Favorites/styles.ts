import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const Favorites = styled.div`
    background-color: ${colors.neutral};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;

    .emptyFavorites {
        margin-top: 30px;
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 20px;
        padding: 24px;

        @media (max-width: ${screenSize.phone}) {
            gap: 10px;
            padding: 0;
        }
    }

    @media (max-width: ${screenSize.phone}) {
        height: 100px;
        margin-bottom: 60px;
        padding: 10px;
    }
`

export const favItem = styled.li`
    min-width: 90px;
    width: 140px;
    height: 140px;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
        transition: all .3s ease;

        &:hover {
            transform: translateY(-6px);
            box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.7);
        }
    }

    @media (max-width: ${screenSize.phone}) {
        min-width: 80px;
        width: 80px;
    }
`