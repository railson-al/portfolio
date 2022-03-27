import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { FieldInputName } from "../../components/FieldInputName";
import { Footer } from "../../components/Footer";

export const Hello: React.FC = () => {

    const navigate = useNavigate();

    function navigateTo() {
        navigate('/');
    }

    return (
        <Container>
            <Header isMain={false}/>
            <FieldInputName onClick={navigateTo}/>
            <Footer isMain={false}/>
        </Container>
    );
}