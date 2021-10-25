import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

      <Info mt>
        <Icon name="arrow-forward-outline" size={14} />
        <Text> swipe right to open drawer.</Text>
      </Info>
    </Wrapper>
  );
};

export default MainScreen;
