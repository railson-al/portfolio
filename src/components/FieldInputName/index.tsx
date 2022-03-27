import React, { useState, useEffect } from 'react';

import { Container, FieldBox, FieldText, FieldInput, GreenButton } from './styles';

interface InputProps {
    onClick: Function
}

export const FieldInputName: React.FC<InputProps> = ({ onClick }) => {

    const localName = localStorage.getItem('@railson-portifolio/yourName')

    const [name, setName] = useState('');
    function getUserName() {
        if(localName) {
            setName(localName);
        }
    }
    function setUserName() {
        localStorage.setItem('@railson-portifolio/yourName', name)
        onClick()
    }

    useEffect(() => {
        getUserName();
    }, [])

    return (
        <Container>
            <FieldBox>
                <FieldText>
                    <h1>Antes de começar, vamos ajustar umas coisas! Como eu vou poder te <span>chamar...</span> {name}?</h1>
                </FieldText>
                <FieldInput>
                    <input type="text" 
                    maxLength={16}
                    placeholder='Ex: Railson ;)' 
                    autoFocus value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                    <GreenButton onClick={setUserName}>Vamos lá!</GreenButton>
                </FieldInput>
            </FieldBox>
            
        </Container>
    );
}