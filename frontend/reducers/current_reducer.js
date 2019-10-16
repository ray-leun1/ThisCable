import {
  RECEIVE_CURRENT_USER,
  RECEIVE_CURRENT_SERVER,
  RECEIVE_CURRENT_CHANNEL
} from '../actions/current_actions';
import { merge } from "lodash";

const _null = {};

const CurrentReducer = (state = _null, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (newState.user) delete newState.user;
      return merge({}, newState, {user: action.user});
    case RECEIVE_CURRENT_SERVER:
      if (newState.server) delete newState.server;
      return merge({}, newState, {server: action.server});
    case RECEIVE_CURRENT_CHANNEL:
      if (newState.channel) delete newState.channel;
      return merge({}, newState, {channel: action.channel});
    default:
      return state;
  }
};

export default CurrentReducer;