import React, {useState} from 'react';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Styles
import {AnswerCard, AnswerText, AnswersContainer} from './styles';

//Types
type Props = {
  options: {
    id: string;
    answer: string;
  }[];
};

export default function AnswerOptions({options}: Props) {
  const [answerSelected, setAnswerSelected] = useState('');

  const setBackgroundColor = (id: string) => {
    if (answerSelected.length === 0) {
      return null;
    }
    if (id === options[0].id) {
      return theme.colors.green;
    }
    if (answerSelected === id) {
      return theme.colors.red;
    }
  };

  return (
    <AnswersContainer>
      {options.map(item => (
        <AnswerCard
          disabled={answerSelected.length > 0}
          onPress={() => {
            setAnswerSelected(item.id);
          }}
          key={item.id}
          backgroundColor={setBackgroundColor(item.id)}>
          <AnswerText>{item.answer}</AnswerText>
          {answerSelected === item.id && (
            <Icon
              name={item.id === options[0].id ? 'thumb-up' : 'thumb-down'}
              color={theme.colors.white}
              size={22}
            />
          )}
        </AnswerCard>
      ))}
    </AnswersContainer>
  );
}
