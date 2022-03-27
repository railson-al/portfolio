import styled from "styled-components";
import colors from "../../styles/colors";

interface StyledButtonProps {
    mainColor?: string,
    contrastColor?: string
}

export const Button = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: solid 1px;
    border-radius: 8px;
    border-color: ${props => props.contrastColor};
    background-color: ${props => props.mainColor};
    width: 120px;
    height: 40px;
    cursor: pointer;
    
    :hover {
        background-color: ${props => props.contrastColor};
        color: ${props => props.mainColor};
        border-color: ${props => props.mainColor};
        transition: ease-in-out, 100ms;

        a {
            color: ${props => props.mainColor}; 
        }
    }

    & a {
        text-decoration: none;
        color: ${props => props.contrastColor};
    }

    & img {
        width: 1.3rem;
        
    }


`;  