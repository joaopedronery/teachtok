import styled from 'styled-components/native';
import theme from '../../theme';

//Types
type CardProps = {
  backgroundColor?: string | null;
};

export const AnswersContainer = styled.View`
  position: absolute;
  bottom: 130px;
  padding-left: 12px;
  gap: 8px;
`;

export const AnswerCard = styled.TouchableOpacity<CardProps>`
  opacity: 0.9;
  border-radius: 6px;
  padding: 10px;
  background-color: ${props => props.backgroundColor || theme.colors.gray};
  width: 280px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AnswerText = styled.Text`
  text-shadow: 1px 1px 2px black;
  font-size: 17px;
  color: ${theme.colors.white};
  width: 80%;
`;
