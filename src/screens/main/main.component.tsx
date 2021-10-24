import React from 'react';
import { Text } from 'react-native';

import useMain from './main.use';
import { Wrapper, Spacer, Info, Website } from './main.style';

const MainScreen: React.FC = () => {
  const { openLink } = useMain();

  return (
    <Wrapper>
      <Info>
        <Text>build by Matt Oliveira - you can find me at</Text>
        <Spacer />
        <Website onPress={openLink}> https://mattdeveloper.com </Website>
      </Info>
    </Wrapper>
  );
};

export default MainScreen;
