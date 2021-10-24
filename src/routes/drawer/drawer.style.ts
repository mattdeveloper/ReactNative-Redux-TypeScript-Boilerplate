import styled from 'styled-components/native';

import { IWrapper } from './drawer.type';

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ isDarkMode }: IWrapper) =>
    isDarkMode ? '#222' : '#fff'};
  flex: 1;
`;
