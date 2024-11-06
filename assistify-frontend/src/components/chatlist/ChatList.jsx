import { Link } from 'react-router-dom';
import './chatlist.css';
import pic from '../../images/logo.webp'
const ChatList = () => {
    return (
        <div className="chatList flex flex-col h-full ">
            <span className="title">Dashboard</span>
            <Link to="/dashboard/">Create a New Chat</Link>
            <Link to="/dashboard">Know more about Assistify</Link>
            <Link to="/dashboard">Contact</Link>

            <span className="title mt-9 mb-9">Recent Chats</span>

            <div className="list flex flex-col overflow-scroll">
                <Link>My chat Title</Link>
                <Link>My chat Title</Link>
                <Link>My chat Title</Link>
                <Link>My chat Title</Link>
                <Link>My chat Title</Link>
                <Link>My chat Title</Link>
                <Link>My chat Title</Link>

            </div>
            <div className="mt-auto flex items-center gap-2">
                <img src={pic} height={24} width={24} alt="logo" />
                <div className="text flex flex-col">
                    <span>Upgrade to Pro</span>
                    <span>Unlock additional features and benefits</span>
                </div>
            </div>
        </div>
    )
};

export default ChatList;