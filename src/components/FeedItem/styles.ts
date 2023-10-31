import styled from 'styled-components/native';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';

const {height: screenHeight} = Dimensions.get('screen');

export const FeedItemContainer = styled.ImageBackground`
  width: 100%;
  height: ${screenHeight - 103}px;
`;

export const QuestionText = styled.Text`
  background-color: ${theme.colors.transparent_black};
  border-radius: 5px;
  color: ${theme.colors.white};
  margin-top: 35%;
  margin-left: 2%;
  width: 50%;
  font-size: 20px;
  padding: 3px;
  z-index: 99;
`;

export const SideButtonsContainer = styled.View`
  position: absolute;
  top: 52%;
  right: 5%;
  gap: 10px;
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const AvatarImage = styled.Image`
  border: 1px solid ${theme.colors.white};
  border-radius: 50px;
  width: 46px;
  height: 46px;
`;

export const PlusIcon = styled(Icon)`
  position: relative;
  bottom: 12px;
  background-color: ${theme.colors.white};
  border-radius: 50px;
`;

export const IconAndDescriptionContainer = styled.View`
  gap: 2px;
  align-items: center;
`;

export const SideButtonText = styled.Text`
  color: ${theme.colors.white};
`;

export const UsernameAndDescriptionContainer = styled.View`
  position: absolute;
  bottom: 45px;
  padding-left: 8px;
`;

export const UsernameText = styled.Text`
  color: ${theme.colors.white};
  font-size: 19px;
  font-weight: 600;
`;

export const DescriptionText = styled.Text`
  color: ${theme.colors.white};
`;

export const PlaylistContainer = styled.View`
  position: absolute;
  background-color: ${theme.colors.black};
  bottom: 0;
  height: 40px;
  width: 100%;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const PlaylistInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const PlaylistText = styled.Text`
  color: ${theme.colors.white};
`;
