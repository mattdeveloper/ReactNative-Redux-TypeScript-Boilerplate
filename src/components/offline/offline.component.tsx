import React from 'react';

import { Wrapper, Warning } from './offline.style';

const OfflineComponent: React.FC = () => {
  return (
    <Wrapper>
      <Warning>You're offline. Connect to the internet to enable all features.</Warning>
    </Wrapper>
  )
}

export default OfflineComponent;