import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

import { RadioButtons } from 'components/complex/RadioButtons';
import { Box } from 'components/simple/Box';
import { Button } from 'components/simple/Button';
import { Text } from 'components/simple/Text';
import { Title } from 'components/simple/Title';
import useFetch from 'hooks/useFetch';
import { useResults } from 'hooks/useResults';

export function QuizPage() {
  const { data, error, isLoading } = useFetch('?amount=10&difficulty=hard&type=boolean');
  const { insertResult } = useResults();
  const { push } = useRouter();

  const [currentAnswer, setCurrentAnswer] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = data?.results[questionNumber];

  function handleQuestionChange() {
    if (questionNumber + 1 === data.results.length) {
      push('/results');
    } else {
      setQuestionNumber((prev) => prev + 1);
      setCurrentAnswer('');
    }
  }

  function handleAnswer() {
    handleQuestionChange();
    insertResult({
      correctAnswer: currentAnswer === currentQuestion.correct_answer,
      question: currentQuestion.question,
    });
  }

  if (error) return <Text>Something went wrong, please try again.</Text>;
  if (isLoading)
    return (
      <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </Box>
    );
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Title>
        <Text textAlign="center" color="white" fontSize="2rem" as="p">
          {currentQuestion?.category}
        </Text>
      </Title>
      <Box flex="1" p="1rem" display="flex" flexDirection="column" justifyContent="space-between">
        <Text as="p" fontSize="1.2rem">
          Question {questionNumber + 1}/10
        </Text>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="space-evenly">
          <Text height="10rem" fontSize="1.5rem" as="p">
            {currentQuestion?.question}
          </Text>
          <RadioButtons
            value={currentAnswer}
            onChange={(e: { target: HTMLInputElement }) => setCurrentAnswer(e.target.value)}
          />
        </Box>

        <Button disabled={!currentAnswer} onClick={handleAnswer} title="NEXT" />
      </Box>
    </Box>
  );
}
