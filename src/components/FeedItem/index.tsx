import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

//Components
import AnswerOptions from '../AnswerOptions';

//Styles
import {
  FeedItemContainer,
  QuestionText,
  SideButtonsContainer,
  PlaylistContainer,
  PlaylistInfoContainer,
  PlaylistText,
  IconAndDescriptionContainer,
  SideButtonText,
  AvatarImage,
  AvatarContainer,
  PlusIcon,
  DescriptionText,
  UsernameAndDescriptionContainer,
  UsernameText,
} from './styles';

//Types
type sideButtonsType = {
  iconName: string;
  text: string;
}[];

export default function FeedItem() {
  const sideButtons: sideButtonsType = [
    {
      iconName: 'cards-heart',
      text: '87',
    },
    {
      iconName: 'comment-processing',
      text: '2',
    },
    {
      iconName: 'bookmark',
      text: '203',
    },
    {
      iconName: 'share',
      text: '17',
    },
  ];
  return (
    <FeedItemContainer
      source={{
        uri: 'https://cross-platform-rwa.rp.devfactory.com/images/3219%20-%20Protestants%20face%20nativists%20in%201800s.png',
      }}>
      <QuestionText>
        Which of the following groups was not a common target for nativists in
        the 1800's?
      </QuestionText>
      <SideButtonsContainer>
        <AvatarContainer>
          <AvatarImage
            source={{
              uri: 'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
            }}
          />
          <PlusIcon name="plus-circle" size={18} color={theme.colors.green} />
        </AvatarContainer>
        {sideButtons.map(item => (
          <IconAndDescriptionContainer>
            <Icon name={item.iconName} color={theme.colors.white} size={28} />
            <SideButtonText>{item.text}</SideButtonText>
          </IconAndDescriptionContainer>
        ))}
      </SideButtonsContainer>
      <AnswerOptions />
      <UsernameAndDescriptionContainer>
        <UsernameText>AP US History</UsernameText>
        <DescriptionText>5.4 The Compromise of 1850 #apush5_1</DescriptionText>
      </UsernameAndDescriptionContainer>
      <PlaylistContainer>
        <PlaylistInfoContainer>
          <Icon name="animation-play" color={theme.colors.white} size={15} />
          <PlaylistText>SADJIASJDIOAJIDOJASIODJS</PlaylistText>
        </PlaylistInfoContainer>
        <Icon name="chevron-right" color={theme.colors.white} size={19} />
      </PlaylistContainer>
    </FeedItemContainer>
  );
}
