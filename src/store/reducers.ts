import { combineReducers } from '@reduxjs/toolkit';

import configReducer from './config/reducers';

export default combineReducers({
  config: configReducer,
});
