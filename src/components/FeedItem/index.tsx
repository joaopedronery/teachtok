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
import {ForYouResponse} from '../../services/feedContent';
type sideButtonsType = {
  iconName: string;
  text: string;
}[];

export default function FeedItem({itemData}: {itemData: ForYouResponse}) {
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
        uri: itemData.image,
      }}>
      <QuestionText>{itemData.question}</QuestionText>
      <SideButtonsContainer>
        <AvatarContainer>
          <AvatarImage
            source={{
              uri: itemData.user.avatar,
            }}
          />
          <PlusIcon name="plus-circle" size={18} color={theme.colors.green} />
        </AvatarContainer>
        {sideButtons.map(item => (
          <IconAndDescriptionContainer key={item.iconName}>
            <Icon name={item.iconName} color={theme.colors.white} size={28} />
            <SideButtonText>{item.text}</SideButtonText>
          </IconAndDescriptionContainer>
        ))}
      </SideButtonsContainer>
      <AnswerOptions options={itemData.options} />
      <UsernameAndDescriptionContainer>
        <UsernameText>{itemData.user.name}</UsernameText>
        <DescriptionText>{itemData.description}</DescriptionText>
      </UsernameAndDescriptionContainer>
      <PlaylistContainer>
        <PlaylistInfoContainer>
          <Icon name="animation-play" color={theme.colors.white} size={15} />
          <PlaylistText>Playlist • Unit 5: {itemData.playlist}</PlaylistText>
        </PlaylistInfoContainer>
        <Icon name="chevron-right" color={theme.colors.white} size={19} />
      </PlaylistContainer>
    </FeedItemContainer>
  );
}
