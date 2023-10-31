import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions} from 'react-native';

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
  const [nextForYouItemsPage, setNextForYouItemsPage] = useState<
    ForYouResponse[] | []
  >([]);
  const getForYouItems = async () => {
    var forYouItemsList = [];
    for (var i = 0; i < 3; i++) {
      var data = await getForYou();
      const correctAnswers = await getCorrectAnswer(data.id);
      data = {...data, correct_options: correctAnswers.correct_options};
      forYouItemsList.push(data);
    }
    if (nextForYouItemsPage.length > 0) {
      setForYouItems([...forYouItems, ...nextForYouItemsPage]);
    } else {
      setForYouItems(forYouItemsList);
    }
    getNextPage();
  };

  const getNextPage = async () => {
    var nextForYouItemsList = [];
    for (var i = 0; i < 3; i++) {
      var data = await getForYou();
      const correctAnswers = await getCorrectAnswer(data.id);
      data = {...data, correct_options: correctAnswers.correct_options};
      nextForYouItemsList.push(data);
    }
    setNextForYouItemsPage(nextForYouItemsList);
  };

  useEffect(() => {
    getForYouItems();
  }, []);
  return (
    <Container>
      <NavBar />
      <FlatList
        snapToAlignment="center"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height - 103}
        data={forYouItems}
        renderItem={item => <FeedItem itemData={item.item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setForYouItems([...forYouItems, ...nextForYouItemsPage]);
          getForYouItems();
        }}
      />
    </Container>
  );
}
