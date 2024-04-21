import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";
import { PageWrapper } from "../../styles";

export const ShopSection = styled(PageWrapper)`

    hr {
        border: 1px solid ${colors.pills};
        margin: 60px auto;
    }

    @media (max-width: ${screenSize.phone}) {
        padding: 20px;
    }
`