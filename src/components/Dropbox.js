import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Dropbox = () => {
    return (
       <Container>
           <Text>Choose your type of house</Text>
           <IconContainer>
               <Ionicons
                    name='ios-arrow-down'
                    color='white'
                    size={20}
                    style={{ marginTop: 1 }}
               />
           </IconContainer>

       </Container>
    )
}

export default Dropbox


const Container = styled.View`
    margin-top: 20px;
    width: 100%;
    background: rgba(255,255,255,0.3);
    padding: 14px;
    border-radius: 32px;
`;

const Text = styled.Text`
    color: white;
    font-size: 16px;
    letter-spacing: 1px;
`;

const IconContainer = styled.View`
    width: 28px;
    height: 28px;
    border-radius: 24px;
    background: #eb5757;
    position: absolute;
    right: 15px;
    top: 10px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;