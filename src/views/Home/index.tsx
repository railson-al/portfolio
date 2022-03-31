import React, {useState, useEffect} from "react";

import { 
    Section, 
    LeftArea, 
    RightArea, 
    Wrap, WrapTitle, 
    WrapButtons, 
    WrapDescription, 
    Picture, 
    Main,
    InLineItems
} from './styles';

import instagramBlackLogo from "../../assets/instagram_black.svg";
import linkedinBlackLogo from "../../assets/linkedin_black.svg";
import gitHubLogo from "../../assets/github.svg";

import colors from "../../styles/colors";

import { Header } from "../../components/Header";
import { SocialButton } from "../../components/SocialButton";
import { ProficienciesBox } from "../../components/ProficienciesBox";


export const Home: React.FC = () => {

    const [visitor, setVisitor] = useState<string | null>('');

    function getVisitorName() {
        const name: string | null = localStorage.getItem('@railson-portifolio/yourName')
        setVisitor(name || 'Visitante');
    }

    useEffect(() => {
        getVisitorName();
    }, []);

    return (
        <>
            <Header isMain={true} />

            {/* Index side */}
            <Section color={colors.with}> 
                <LeftArea>
                    <Wrap>
                        <WrapTitle color={colors.black}>É um prazer ter você aqui, <span>{visitor}</span>!</WrapTitle>
                        <WrapButtons>
                            <p>Acompanhe também</p>
                            <SocialButton type="github" name="GitHub" link="https://github.com/railson-al/portfolio" mainColor={colors.black} contrastColor={'#fff'}/>
                            <SocialButton type="linkedin" name="LinkedIn" link="https://www.linkedin.com/in/railson-almeida/" mainColor={'#0077b5'} contrastColor={'#fff'}/>
                        </WrapButtons>
                        
                    </Wrap>
                </LeftArea>
                <RightArea></RightArea>
            </Section>

            {/* About side */}
            <Section color={colors.black}>
            <LeftArea>
                    <Wrap>
                        <WrapTitle color={colors.with}>Meu Nome? <span>{' Railson'}</span></WrapTitle>
                        <WrapDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat id aliquam facilis labore deleniti sint magni fuga minus voluptatibus sequi facere, modi corrupti quisquam consequuntur. Pariatur blanditiis velit saepe nam.</WrapDescription>                       
                        <WrapDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat id aliquam facilis labore deleniti sint magni fuga minus voluptatibus sequi facere, modi corrupti quisquam consequuntur. Pariatur blanditiis velit saepe nam.</WrapDescription>
                        <WrapDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat id aliquam facilis labore deleniti sint magni fuga minus voluptatibus sequi facere, modi corrupti quisquam consequuntur. Pariatur blanditiis velit saepe nam.</WrapDescription>                       

                    </Wrap>
                </LeftArea>
                <RightArea>
                    <Picture>
                        <div></div>

                        <p>Railson Almeida</p>
                        <p>Ceará, Brasil</p>
                    </Picture>

                </RightArea>
            </Section>

            {/* Proficiencies side */}
            <Section color={colors.with}>               
                <Main>
                    <WrapTitle color={colors.black}>Competências</WrapTitle>
                    <ProficienciesBox />
                    <InLineItems>
                        <img src={instagramBlackLogo}   width={24}   onClick={() => {window.open('#', '_blank')}}/>
                        <img src={gitHubLogo}           width={24}   onClick={() => {window.open('#', '_blank')}}/>
                        <img src={linkedinBlackLogo}    width={24}   onClick={() => {window.open('#', '_blank')}}/>
                    </InLineItems>                    
                </Main>

            </Section>
            
            {/* Projects side */}
            <Section color={colors.black}>
            </Section>
            
        </>
    );
}