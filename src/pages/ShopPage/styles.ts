import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const ShopSection = styled.div`
    background-color: ${colors.neutral};
    max-width: 1440px;
    width: 96%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 30px;
    border-radius: 20px;

    hr {
        border: 1px solid ${colors.pills};
        margin: 60px auto;
    }

    @media (max-width: ${screenSize.phone}) {
        padding: 20px;
    }
`