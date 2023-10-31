import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

//Components
import NavBar from '../../components/NavBar';
import FeedItem from '../../components/FeedItem';

//Services
import {getCorrectAnswer, getForYou} from '../../services/feedContent';

//Styles
import {Container} from './styles';

//Types
import {ForYouResponse} from '../../services/feedContent';

export default function Home() {
  const [forYouItems, setForYouItems] = useState<ForYouResponse[] | []>([]);
  const getForYouItems = async () => {
    var forYouItemsList = [];
    for (var i = 0; i < 10; i++) {
      var data = await getForYou();
      const correctAnswers = await getCorrectAnswer(data.id);
      data = {...data, correct_options: correctAnswers.correct_options};
      forYouItemsList.push(data);
    }
    setForYouItems(forYouItemsList);
  };

  useEffect(() => {
    getForYouItems();
  }, []);
  return (
    <Container>
      <NavBar />
      <FlatList
        data={forYouItems}
        renderItem={item => <FeedItem itemData={item.item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}
