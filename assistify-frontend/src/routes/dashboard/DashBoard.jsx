import React from 'react';
import logo from '../../images/logo.webp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatIcon from '@mui/icons-material/Chat';
import ImageIcon from '@mui/icons-material/Image';
import CodeIcon from '@mui/icons-material/Code';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigate = useNavigate();

    const newChatHandler = () => {
        const randomId = Math.ceil(Math.random() * 10000);
        navigate(`/dashboard/chats/${randomId}`);
    };
    

    return (
        <div className="h-full flex flex-col items-center">
            <div className="text flex flex-1 items-center justify-center flex-col w-[50%] gap-[50px]">
                <div className="logo flex items-center gap-5">
                    <img src={logo} alt="Logo" className="h-[64px] w-[64px]" />
                    <h1 className='text-6xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text opacity-60'>Assistify</h1>
                </div>
                <div className="options w-full flex items-center justify-between">
                    <div className="option cursor-pointer" onClick={newChatHandler} >
                        <ChatIcon fontSize="large" />
                        <span>Create a New Chat</span>
                    </div>
                    <div className="option cursor-pointer" onClick={newChatHandler}>
                        <ImageIcon fontSize="large" />
                        <span>Analyze Image</span>
                    </div>
                    <div className="option cursor-pointer" onClick={newChatHandler}>
                        <CodeIcon fontSize="large" />
                        <span>Help with code</span>
                    </div>
                </div>
            </div>
            <div className="form mb-[1px] w-[50%] flex bg-[#12101B] p-4 rounded-lg shadow-lg">
                <form className="w-full flex items-center" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Ask me anything....' />
                    <button type="submit">
                        <ArrowUpwardIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashBoard;
