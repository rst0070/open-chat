import React from 'react';
import ReactDOM from 'react-dom';
import CreateChatRoom from './create-chat-room';
import './chat-list.css';
export default class ChatList extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <CreateRoom />
            </div>
        );
    }
}

function CreateRoom(){
    function click(){
        ReactDOM.render(
            <React.StrictMode>
                <CreateChatRoom />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    return (
        <div>
            <button onClick={click}>create chat room</button>
        </div>
    );
}