import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Dropbox from './src/components/Dropbox';
import Card from './src/components/Card';

import { ScrollView } from 'react-native';

const App = () => {
  return (
    <Container>
      <BgImage source={require('./src/assets/image1.png')} imageStyle={{opacity:0.5}}/>
      <TitleBar>
        <Ionicons 
          name='md-arrow-back'
          size={25}
          color='white'
          style={{ position: 'absolute', left: 30, top: 10 }}
        />

        <AvatarBorder>
          <Avatar source={require('./src/assets/avatar.png')} />
        </AvatarBorder>
      </TitleBar>

      <Content>
        <Title>What type of house do you want?</Title>
        <Dropbox />
      </Content>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card image={require('./src/assets/card1.png')} name='Popular' />
        <Card image={require('./src/assets/card2.png')} name='New' />
        <Card image={require('./src/assets/card4.png')} name='Hot' />
        
      </ScrollView>
    </Container>
  )
}

export default App

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const BgImage = styled.Image`
  position: absolute;
  backgroundColor: 'rgb(0,0,0)';
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 500px;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 38px;
`;

const AvatarBorder = styled.View`
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 32px;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 30px;
`;

const Content = styled.View`
  margin-top: 150px;
  padding: 24px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 32px;
`;