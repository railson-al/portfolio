import React, {useState, useEffect} from "react";

import { Section, 
    LeftArea, 
    RightArea, 
    Wrap, WrapTitle, 
    WrapButtons, 
    WrapDescription, 
    Picture } from './styles';

import colors from "../../styles/colors";

import { Header } from "../../components/Header";
import { SocialButton } from "../../components/SocialButton";

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
                            <SocialButton type="github" name="GitHub" link="https://github.com/railson-al" mainColor={colors.black} contrastColor={'#fff'}/>
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

            {/* Contact side */}
            <Section color={colors.with}>
                <LeftArea>

                <WrapTitle color={colors.black}>Onde me encontrar?</WrapTitle>
                <Wrap>


                <SocialButton type="github" name="GitHub" link="https://github.com/railson-al" mainColor={colors.black} contrastColor={'#fff'}/>
                <SocialButton type="linkedin" name="LinkedIn" link="https://www.linkedin.com/in/railson-almeida/" mainColor={'#0077b5'} contrastColor={'#fff'}/>
                </Wrap>
                </LeftArea>


            </Section>
            
            {/* Projects side */}
            <Section color={colors.black}>
            </Section>
            
        </>
    );
}