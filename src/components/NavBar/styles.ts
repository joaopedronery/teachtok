import styled from 'styled-components/native';
import theme from '../../theme';
import {Platform, StatusBar} from 'react-native';

export const NavBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 6px;
  right: 0;
  left: 0;
  margin-top: ${Platform.OS === 'android'
    ? `${StatusBar.currentHeight}px`
    : '55px'};
  padding: 0px 15px;
  align-items: center;
  z-index: 99;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
  width: 30px;
`;

export const TimeText = styled.Text`
  color: ${theme.colors.gray};
`;

export const ForYouContainer = styled.View`
  align-items: center;
  gap: 5px;
`;

export const ForYouText = styled.Text`
  color: ${theme.colors.white};
  font-weight: 600;
`;

export const ForYouRectangle = styled.View`
  width: 30px;
  height: 3px;
  background-color: ${theme.colors.white};
`;

export const SearchIconContainer = styled.View`
  width: 30px;
`;
