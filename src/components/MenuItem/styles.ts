import styled from "styled-components";
import { colors } from "../../styles/colors";

export const MenuItem = styled.li`
    width: 300px;
    padding: 10px;
    border: 1px solid ${colors.pills};
    border-radius: 20px;
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    img {
        width: 100%;
        border-radius: 10px;
    }

    h4 {
        font-size: 22px;
    }

    .dishTitle {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;

        .previousPrice {
            margin-right: 10px;
            color: ${colors.pills};
            text-decoration: line-through;
        }
    }
`