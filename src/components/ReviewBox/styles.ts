import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ReviewBox = styled.li`
    display: grid;
    grid-template-columns: 60px auto;
    gap: 10px;
    padding: 10px;
    border: 1px solid ${colors.pills};
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    height: 96px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

    .reviewBoxTitle {
        display: flex;
        justify-content: space-between;


        h3 {
            font-size: 16px;
            margin-bottom: 4px;
        }

        img {
            width: 20px;
        }
    }

    .userImg {
        width: 60px;
        border-radius: 50%;
    }

    p {
        font-size: 12px;
    }
`