import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useSWRConfig } from 'swr';

import { Box } from 'components/simple/Box';
import { Button } from 'components/simple/Button';
import ResultIcon from 'components/simple/ResultIcon';
import { Text } from 'components/simple/Text';
import { Title } from 'components/simple/Title';
import { useResults } from 'hooks/useResults';

export default function ResultPage() {
  const { cache } = useSWRConfig();
  const { results, rightAnswers, totalItems, resetResults } = useResults();

  const { push } = useRouter();

  const restartGame = () => {
    resetResults();
    cache.delete('?amount=10&difficulty=hard&type=boolean');
    push('/');
  };

  return (
    <>
      <Title>
        <Text textAlign="center" color="white" fontSize="2rem" as="p">
          You Scored <br />
          {rightAnswers}/{totalItems}
        </Text>
      </Title>
      <Box overflow="auto" height="calc(100% - 13.6rem)">
        {results.map((result) => (
          <Box
            key={result.question}
            display="flex"
            p="1rem"
            alignItems="flex-start"
            justifyContent="space-between"
            style={{ gap: '1rem' }}
          >
            <ResultIcon type={result.correctAnswer} />
            <Text as="p" fontSize="1.1rem">
              {result.question}
            </Text>
          </Box>
        ))}
      </Box>
      <Box p="1rem">
        <Button onClick={restartGame} title="PLAY AGAIN?" />
      </Box>
    </>
  );
}
