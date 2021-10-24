import { Linking, Alert } from 'react-native';

const useMain = () => {
  const url = 'https://mattdeveloper.com';

  const openLink = () => {
    Alert.alert('Ops!', `Don't know how to open URI: ${url}`);
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URI: ${url}`);
      }
    });
  };

  return { openLink };
};

export default useMain;
