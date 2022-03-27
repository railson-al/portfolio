import styled from 'styled-components';
import colors from '../../styles/colors';

interface StyledCardProps {
    primary?: boolean

}

export const Container = styled.div<StyledCardProps>`
    width: 100%;
    height: 65px;
    background-color: ${(props) => props.primary ? colors.black : colors.with};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 26px;

    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export const LeftHeader = styled.div``;

export const RightHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & p {
        margin: 0 10px;
        color: ${colors.gray};
        cursor: default;
    }
`;

export const LinkArea = styled.div`

    display: flex;
    justify-content: space-around;
    margin: 0 20px;

    & a {
        text-decoration: none;
        color: ${colors.with};
        margin: 0 10px;
    }

    & a:hover {
        color: ${colors.lightGray};
        transition: ease-in-out, 100ms;
    }

`;

export const RedButton = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 7px;
    background-color: ${colors.red};
    color: ${colors.with};
    font-weight: bold;
    cursor: pointer;

    &:hover {
        transition: ease-in-out, 100ms;
        background-color: ${colors.shadowRed};
    }
`;
