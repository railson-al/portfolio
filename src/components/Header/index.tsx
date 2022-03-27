import React from "react";

import { Container, LeftHeader, RightHeader, LinkArea, RedButton } from './styles';

import LogoBlack from '../../assets/logo_black.png';
import LogoWhite from '../../assets/logo_white.png';

interface Props {
    isMain: boolean
}

export const Header: React.FC<Props> = ({isMain}) => {

    return (
        <Container primary={isMain}>
            <LeftHeader>
                <img src={isMain ? LogoWhite : LogoBlack} width={36}/>
            </LeftHeader>

            <RightHeader>
                {
                    isMain
                    ?
                    <LinkArea>
                        <a href="#">Início</a>
                        <a href="#">Sobre</a>
                        <a href="#">Projetos</a>
                    </LinkArea>
                    

                    :
                    <p>Ou se preferir...</p>
                }
                
                <RedButton>Fala Comigo!</RedButton>
            </RightHeader>
        </Container>
    );
}