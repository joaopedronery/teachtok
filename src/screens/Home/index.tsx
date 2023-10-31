import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

//Components
import NavBar from '../../components/NavBar';
import FeedItem from '../../components/FeedItem';

//Services
import {getForYou} from '../../services/feedContent';

//Styles
import {Container} from './styles';

//Types
import {ForYouResponse} from '../../services/feedContent';

export default function Home() {
  const [forYouItems, setForYouItems] = useState<ForYouResponse[] | []>([]);
  const getForYouItems = async () => {
    console.log('entrou func');
    var forYouItemsList = [];
    for (var i = 0; i < 10; i++) {
      const data = await getForYou();
      forYouItemsList.push(data);
    }
    console.log(forYouItemsList);
    setForYouItems(forYouItemsList);
  };

  useEffect(() => {
    console.log('ue1');
    getForYouItems();
  }, []);
  return (
    <Container>
      <NavBar />

      <FlatList
        data={forYouItems}
        renderItem={item => (
          <FeedItem itemData={item.item} key={item.index.toString()} />
        )}
      />
    </Container>
  );
}
