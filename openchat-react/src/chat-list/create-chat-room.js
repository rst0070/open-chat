import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import $ from 'jquery';

import './create-chat-room.css';
import ChatList from './chat-list';
import ChatRoom from '../chat-room/chat-room';

export default class CreateChatRoom extends React.Component {

    constructor(props){
        super(props);

        this.backToChatList = this.backToChatList.bind(this);
        this.createButton = this.createButton.bind(this);
    }

    backToChatList(){
        ReactDOM.render(
            <React.StrictMode>
                <ChatList />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    createButton(){
        let chatRoomName = $('#input-box input[name=name]').val();
        let chatRoomPw = $('#input-box input[name=pw]').val();
        let chatRoomDes = $('#input-box input[name=ds]').val();
        if(!chatRoomName.length){
            alert("chat room name required!");
            return;
        }

        ReactDOM.render(
            <React.StrictMode>
                <ChatRoom/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    render(){

        //https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react
        return (
            <div id="input-box">
                <Helmet>
                    <title>OpenChat: create chat room</title>
                </Helmet>
                <h1>Create Chat Room</h1>
                <input name='name' type="text" placeholder='chat room name'/>
                <input name='pw' type="password" placeholder='chat room password'/>
                <input name='ds' type="text" placeholder='description' />
                <button onClick={this.createButton}>create</button>
                <button onClick={this.backToChatList}>cancel</button>
            </div>
        );
    }
}