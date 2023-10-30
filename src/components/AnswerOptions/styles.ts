import styled from 'styled-components/native';
import theme from '../../theme';

export const AnswersContainer = styled.View`
  position: absolute;
  bottom: 130px;
  padding-left: 12px;
  gap: 8px;
`;

export const AnswerCard = styled.TouchableOpacity`
  opacity: 0.9;
  border-radius: 6px;
  padding: 10px;
  background-color: ${theme.colors.gray};
  width: 280px;
`;

export const AnswerText = styled.Text`
  text-shadow: 1px 1px 2px black;
  font-size: 19px;
  color: ${theme.colors.white};
`;
