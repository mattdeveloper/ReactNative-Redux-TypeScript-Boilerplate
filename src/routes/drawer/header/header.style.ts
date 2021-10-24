import styled from 'styled-components/native';

export const Wrapper = styled.View`
  border-bottom-width: 1px;
  border-color: #eee;
  margin: 0 0 0 0;
  padding: 20px 15px 15px;
`;

export const Picture = styled.Image`
  border-radius: 50px;
  height: 50px;
  width: 50px;
`;

export const Info = styled.View`
  margin: 15px 0 0;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Position = styled.Text`
  color: #aaa;
  font-size: 12px;
`;

export const Logout = styled.TouchableOpacity`
  align-items: center;
  border-color: #222;
  border-radius: 9999px;
  border-width: 1px;
  justify-content: center;
  margin: 10px 0 0;
  padding: 5px 0;
  width: 80px;
`;

export const LogoutText = styled.Text`
  font-size: 11px;
`;
