import React from "react";
import colors from "../../styles/colors";

import { Button} from './styles';

import gitHubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

interface ButtonProps {
    type: string,
    link: string,
    name: string,
    mainColor: string,
    contrastColor: string
}


export const SocialButton: React.FC<ButtonProps> = ({ link, type, name, mainColor, contrastColor }) => {
    return (
        <>
        <Button mainColor={mainColor} contrastColor={contrastColor} onClick={() => {window.open(link, '_blank')}}>
            <img src={type === 'github' ? gitHubIcon : linkedinIcon}/>
            <a href={link} target="_blank" rel="noopener noreferrer" id="link">{name}</a>
        </Button>
        </>

    );
}