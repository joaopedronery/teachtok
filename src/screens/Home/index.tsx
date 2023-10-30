import React from 'react';
import {View} from 'react-native';

//Components
import NavBar from '../../components/NavBar';
import FeedItem from '../../components/FeedItem';

//Styles
import {Container} from './styles';

export default function Home() {
  return (
    <Container>
      <NavBar />
      <FeedItem />
    </Container>
  );
}
