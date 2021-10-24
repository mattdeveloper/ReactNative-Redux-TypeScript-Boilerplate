import styled from 'styled-components/native';

import { colors } from 'src/utils';

import { IInfo } from './main.type';

export const Wrapper = styled.View`
  align-items: center;
  background-color: ${colors.theme.primary};
  flex: 1;
  justify-content: center;
  padding: 15px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 30;
  max-width: 300px;
  text-align: center;

  ${({ mt }: IInfo) => mt && 'margin-top: 45px'};
`;

export const Spacer = styled.View`
  width: 5px;
`;

export const Website = styled.Text`
  background-color: #fff;
  color: ${colors.theme.primary};
  padding: 5px;
  width: 130px;
`;
