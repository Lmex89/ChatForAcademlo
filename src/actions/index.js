import * as types from '../constants/ActionsTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) =>({
    type : types.ADD_MESSAGE,
    id: nextMessageId++,
    message: message,
    author: author
})

export const addUser = (name) => ({
    type : types.ADD_USER,
    id : nextUserId++,
    name: name,
})

export const messageReceived = (message,author) =>({
    type : types.MESSAGE_RECEIVED,
    id : nextUserId++,
    message : message,
    author : author
})

export const populateUserList = (users) => ({
    type: types.USERS_LIST,
    users: users,
    
})