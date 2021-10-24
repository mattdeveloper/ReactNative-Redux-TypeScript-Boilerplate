import React from 'react';
import { Alert } from 'react-native';

import {
  Wrapper,
  Picture,
  Info,
  Name,
  Position,
  Logout,
  LogoutText,
} from './header.style';

const DrawerHeader: React.FC = () => {
  const handleLogout = () => {
    Alert.alert('Hello user', 'You will become a stranger now ;)');
  };

  return (
    <Wrapper>
      <Picture
        source={{
          uri: 'https://mattdeveloper.com/wp-content/themes/matt-developer/src/img/profile-picture.png',
        }}
      />

      <Info>
        <Name>Matt</Name>
        <Position>Software Engineer</Position>
        <Logout onPress={handleLogout}>
          <LogoutText>logout</LogoutText>
        </Logout>
      </Info>
    </Wrapper>
  );
};

export default DrawerHeader;
