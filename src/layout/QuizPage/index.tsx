import { Skeleton } from 'antd';
import React, { useState } from 'react';

import { RadioButton } from 'components/complex/RadioButton';
import { Box } from 'components/simple/Box';
import { Button } from 'components/simple/Button';
import { Text } from 'components/simple/Text';
import useFetch from 'hooks/useFetch';

export function QuizPage() {
  const { data, error, isLoading } = useFetch('?amount=10&difficulty=hard&type=boolean');
  const [questionNumber, setQuestionNumber] = useState(0);
  const currentQuestion = data?.results[questionNumber];
  console.log(data);
  const options = [
    {
      value: 'TRUE',
      label: 'True',
    },
    {
      value: 'FALSE',
      label: 'False',
    },
  ];

  if (error) return <Text>Something went wrong, please try again.</Text>;
  if (isLoading)
    return (
      <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </Box>
    );
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box
        height="8rem"
        borderRadius="sm"
        backgroundColor="lightPurple"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text textAlign="center" color="white" fontSize="2rem" as="p">
          {currentQuestion?.category}
        </Text>
      </Box>
      <Box flex="1" p="1rem" display="flex" flexDirection="column" justifyContent="space-between">
        <Text as="p" fontSize="1.2rem">
          Question 1/10
        </Text>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="space-evenly">
          <Text fontSize="1.5rem" as="p">
            {currentQuestion?.question}
          </Text>
          <RadioButton options={options} />
        </Box>

        <Button title="NEXT" />
      </Box>
    </Box>
  );
}
