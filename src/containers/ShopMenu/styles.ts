import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const MenuContainer = styled.section`

    h3 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 30px;
    }
`

export const MenuSection = styled.div`
    margin-bottom: 60px;
    padding: 20px 10px;
    border: 1px solid ${colors.pills};
    border-radius: 20px;

    h4 {
        font-size: 24px;
    }

    @media (max-width: ${screenSize.phone}) {
        h4 {
            font-size: 20px;
            text-align: center;
        }
    }
`

export const MenuList = styled.ul`
    list-style: none;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;

    @media (max-width: ${screenSize.phone}) {
        gap:10px
    }
`