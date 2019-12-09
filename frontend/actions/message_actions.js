import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const getMessages = channelId => dispatch => (
  MessageAPIUtil.getMessages(channelId)
    .then(messages => dispatch(receiveMessages(messages)))
);

export const getMessage = id => dispatch => (
  MessageAPIUtil.getMessage(id)
    .then(message => dispatch(receiveMessage(message)))
);

export const createMessage = message => dispatch => (
  MessageAPIUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)))
);

export const updateMessage = message => dispatch => (
  MessageAPIUtil.updateMessage(message)
    .then(message => dispatch(receiveMessage(message)))
);

export const deleteMessage = id => dispatch => (
  MessageAPIUtil.deleteMessage(id)
    .then(message => dispatch(removeMessage(message.id)))
);