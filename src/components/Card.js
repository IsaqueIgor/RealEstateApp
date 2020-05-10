import React from 'react'
import styled from 'styled-components';

const Card = ({ image , name}) => {
    return (
        <Container>
            <BgImage source={image} />
            <Title>{name}</Title>
        </Container>
    )
}

export default Card;

const Container = styled.View`
    flex: 1;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 230px;
    height: 300px;
    border-radius: 15px;
    box-shadow: 0px 4px 7px rgba(0,0,0,0.25);
`;
const Title = styled.Text`
    position: absolute;
    bottom: 20px;
    margin-bottom: 30px;
    left: 15px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
`;

const BgImage = styled.Image`
    position: absolute;
    width: 230px;
    height: 350px;
    border-radius: 15px;
`;
