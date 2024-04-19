import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const Footer = styled.div`
    background-color: ${colors.neutral};
    padding: 30px;
    border-radius: 20px;
    width: 94%;
    margin: 30px auto;

    span {
        font-size: 16px;
    }

    p {
        margin-top: 20px;
    }

    @media (max-width: ${screenSize.phone}) {
        margin-bottom: 80px;
    }
`