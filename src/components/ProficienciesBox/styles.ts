import styled from "styled-components";

interface BoxProps {
    color: string,
    shadowColor: string
}


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const HeroBox = styled.div<BoxProps>`
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 256px;
    height: 422px;
    padding: 15px;
    margin: 0 50px;
    border-radius: 7px;
    color: #fff;
    cursor: default;
    transition: ease-in-out, 200ms;
   
    :hover {
        transition: ease-in-out, 200ms;
        transform: scale(1.05);
        box-shadow: 0px 0px 5px #c2c2c2;
        background-image: linear-gradient(to bottom right, ${props => props.color}, ${props => props.shadowColor});
    }

    & img {
        width: 76px;
        margin-bottom: 15px;
    }

    & h1 {
        font-size: 1.4rem;
        text-align: center;
        
    }

    & p {
        font-size: 0.9rem;
        text-align: justify;
    }

`;