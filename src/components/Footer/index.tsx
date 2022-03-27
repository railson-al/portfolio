import React from "react";

import { Container } from './styles';

import LogoBlack from '../../assets/logo_black.png';
import LogoWhite from '../../assets/logo_white.png';

interface Props {
    isMain: boolean
}

export const Footer: React.FC<Props> = ({isMain}) => {

    return (
        <Container>
            <p>Railson Almeida 2022</p>
            <img src={LogoBlack} width={20}/>
            <img src={LogoBlack} width={20}/>
        </Container>
    );
}