export const UPDATE_CONNECTION = 'UPDATE_CONNECTION';

export interface IReducerConfigState {
  connected: boolean;
}

export interface IUpdateConnection {
  type: typeof UPDATE_CONNECTION;
  payload: boolean;
}

export type ConfigActionTypes = IUpdateConnection;
