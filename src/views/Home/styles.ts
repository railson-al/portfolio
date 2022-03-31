import styled from "styled-components";
import colors from "../../styles/colors";

interface StyledCardProps {
    color?: string

}

interface WrapTitleProps {
    color: string
}

export const Section = styled.div<StyledCardProps>`

    background-color: ${(props) => props.color};
    height: 100vh;
    width: 100%;

    display: flex;
    
`;

export const RightArea = styled.div`
    width: 50%;
    height: 100%;

`;

export const LeftArea = styled.div`
    width: 50%;
    height: 100%;

`;

export const Wrap = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const WrapTitle = styled.h1<WrapTitleProps>`

    color: ${props => props.color};
    font-size: 3vw;
    padding: 30px 50px;
    
    & span {
        color: ${colors.red};
    }
`;

export const WrapButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;

    & button {
        margin-left: 14px;
    }

    & p {
        margin-left: 10px;
        color: ${colors.gray};

    }
`;

export const WrapDescription = styled.h2`
    font-size: 1.4vw;
    font-weight: normal;
    padding: 0 30px;
    margin-top: 20px;
    color: ${colors.with};
`;

export const Picture = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & div {
        width: 250px;
        height: 250px;
        background-color: #c5c5c5;
        border-radius: 200px;
        margin-bottom: 20px;
        border: 5px solid #fff;
    }

    & p {
        color: ${colors.with};
        font-weight: bold;
        margin-bottom: 5px;

    }

    & p + p {
        font-weight: normal;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

export const InLineItems = styled.div`
    width: 5vw;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & img {
        margin: 0 10px;
        cursor: pointer;
    }


`;


