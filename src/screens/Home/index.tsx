import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, Alert} from 'react-native';

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
    if (nextForYouItemsPage.length === 0) {
      var forYouItemsList = [];
      try {
        for (var i = 0; i < 3; i++) {
          var data = await getForYou();
          const correctAnswers = await getCorrectAnswer(data.id);
          data = {...data, correct_options: correctAnswers.correct_options};
          forYouItemsList.push(data);
        }
      } catch (error) {
        Alert.alert(
          'Error',
          'An error ocurred while requesting questions data.',
        );
      }

      setForYouItems(forYouItemsList);
    }
    getNextPage();
  };

  const getNextPage = async () => {
    try {
      var nextForYouItemsList = [];
      for (var i = 0; i < 3; i++) {
        var data = await getForYou();
        const correctAnswers = await getCorrectAnswer(data.id);
        data = {...data, correct_options: correctAnswers.correct_options};
        nextForYouItemsList.push(data);
      }
      setNextForYouItemsPage(nextForYouItemsList);
    } catch (error) {
      Alert.alert('Error', 'An error ocurred while requesting questions data');
    }
  };

  useEffect(() => {
    getForYouItems();
  }, []);
  return (
    <Container>
      <NavBar />
      <FlatList
        onEndReachedThreshold={0.1}
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
