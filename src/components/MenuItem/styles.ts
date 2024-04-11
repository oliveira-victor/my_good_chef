import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const MenuItem = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid ${colors.pills};
    border-radius: 20px;
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
    }

    img {
        width: 100%;
        border-radius: 10px;
    }

    h4 {
        font-size: 18px;
    }

    .dishTitle {
        display: grid;
        grid-template-columns: auto 60px;
        padding-top: 10px;
        align-items: center;

        .price {
            display: flex;
            flex-direction: column;

            .previousPrice {
                margin-right: 10px;
                color: ${colors.pills};
                text-decoration: line-through;
            }
        }
    }

    @media (max-width: ${screenSize.phone}) {
        width: 140px;

            .dishTitle {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;

                h4 {
                    font-size: 12px;
                }

            .price {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
`