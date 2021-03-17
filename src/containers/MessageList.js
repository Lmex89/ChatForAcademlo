import {connect} from 'react-redux';
import MessagesListComponent from '../components/MessageList';



export const MessageList = connect((state)=>({
    messages: state.messages
}),{})(MessagesListComponent)