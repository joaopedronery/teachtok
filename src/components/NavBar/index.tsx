import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';

//Styles
import {
  NavBarContainer,
  ForYouContainer,
  ForYouRectangle,
  ForYouText,
  TimeContainer,
  TimeText,
  SearchIconContainer,
} from './styles';

export default function NavBar() {
  return (
    <NavBarContainer>
      <TimeContainer>
        <Icon name="clock" color={theme.colors.gray} size={15} />
        <TimeText>10m</TimeText>
      </TimeContainer>
      <ForYouContainer>
        <ForYouText>For You</ForYouText>
        <ForYouRectangle />
      </ForYouContainer>
      <SearchIconContainer>
        <IonIcon name="search" color={theme.colors.white} size={20} />
      </SearchIconContainer>
    </NavBarContainer>
  );
}
