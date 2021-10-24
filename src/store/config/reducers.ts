import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ConfigActionTypes,
  IReducerConfigState,
  UPDATE_CONNECTION,
} from './types';

const initialState: IReducerConfigState = {
  connected: true,
};

const persistConfig = {
  storage: AsyncStorage,
  key: 'config',
  whitelist: ['connected'],
};

const reducers = (state = initialState, action: ConfigActionTypes) => {
  switch (action.type) {
    case UPDATE_CONNECTION:
      return {
        ...state,
        connected: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, reducers);
