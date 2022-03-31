import React from "react";

import { Content, HeroBox } from './styles';

import logoWeb from '../../assets/logo_white.png';
import colors from "../../styles/colors";

export const ProficienciesBox: React.FC = () => {

    return (
        <Content>
            <HeroBox color={colors.green} shadowColor={colors.shadowGreen}>
                <img src={logoWeb} />

                <h1>Desenvolvimento Mobile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eum? Quia voluptates rem quam repellat quod perferendis quis inventore deleniti suscipit nam neque accusamus excepturi ea voluptatem error, fugit consequatur.</p>
            </HeroBox>

            <HeroBox color={colors.red} shadowColor={colors.shadowRed}>
                <img src={logoWeb} />

                <h1>Desenvolvimento Web</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eum? Quia voluptates rem quam repellat quod perferendis quis inventore deleniti suscipit nam neque accusamus excepturi ea voluptatem error, fugit consequatur.</p>
            </HeroBox>

            <HeroBox color={colors.blue} shadowColor={colors.shadowBlue}>
                <img src={logoWeb} />

                <h1>Storage & Cloud</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eum? Quia voluptates rem quam repellat quod perferendis quis inventore deleniti suscipit nam neque accusamus excepturi ea voluptatem error, fugit consequatur.</p>
            </HeroBox>
        </Content>
    );
}