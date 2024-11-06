import NewPrompt from '../../components/newprompt/NewPrompt';
import './ChatPage.css'
import { useEffect, useRef } from 'react';
const ChatPage = () => {
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }, []);
    return (
        <div className="ChatPage h-full flex flex-col items-center">
            <div className="wrapper flex-1 overflow-auto w-full flex justify-center items-center h-full px-4">
                <div className="chat flex flex-col gap-2 w-1/2">
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message ai">Test Message</div>
                    <div className="message user">Test Message from user</div>
                    <NewPrompt />
                    <div ref={endRef}></div>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
