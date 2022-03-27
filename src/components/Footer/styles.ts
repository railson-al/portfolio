import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;

    background-color: ${colors.with};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 26px;

    & p {
        font-size: 12px;
        font-weight: 600;
        color: ${colors.gray};
        margin: 0 8px;
    }

    & img {
        margin: 0 8px;
    }
`;
