import { useRouter } from 'next/dist/client/router';
import React from 'react';

import { Box } from 'components/simple/Box';
import { Button } from 'components/simple/Button';
import { Text } from 'components/simple/Text';

export function HomePage() {
  const { push } = useRouter();

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box borderRadius="sm" p="1rem" backgroundColor="lightPurple">
        <Text color="white" fontSize="2rem" as="p">
          Welcome to the <br /> Trivia Challenge!
        </Text>
      </Box>
      <Box flex="1" p="1rem" display="flex" flexDirection="column" justifyContent="space-between">
        <Box flex="1" display="flex" flexDirection="column" justifyContent="space-evenly">
          <Text fontSize="1.5rem" as="p">
            You will be presented with 10 True or False questions.
          </Text>
          <Text fontSize="1.5rem" as="p">
            Can you score 100%?
          </Text>
        </Box>

        <Button onClick={() => push('/quiz')} title="BEGIN" />
      </Box>
    </Box>
  );
}
