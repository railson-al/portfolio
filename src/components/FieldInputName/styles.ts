import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const FieldBox = styled.div`
    width: 70vw;
    height: 30vh;
    //background-color: gray;
    
    font-size: 1.5vw;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
    }

`;

export const FieldText = styled.div`
    color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    & h1 {
        font-size: 2rem;

    }

    & span {
        color: ${colors.red};
    }

    @media screen and (max-width: 700px) {
        & h1 {
            font-size: 1.2rem;
        }
    }

`;

export const FieldInput = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    & input {
        font-size: 0.9rem;
        border: 2px solid ${colors.lightGray};
        padding: 0.7rem 1rem;
        border-radius: 7px;
        outline: 0;
        color: ${colors.black};
        width: 70%;
    }
    & input:focus {
        box-shadow: 2px 2px 12px ${colors.lightGray};
    }
`;

export const GreenButton = styled.button`
    background-color: ${colors.green};
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 7px;
    color: ${colors.with};
    font-weight: bold;

    &:hover {
        transition: ease-in-out, 100ms;
        cursor: pointer;
        background-color: ${colors.shadowGreen};
        box-shadow: 2px 2px 6px ${colors.lightGray};
        
    }
`;