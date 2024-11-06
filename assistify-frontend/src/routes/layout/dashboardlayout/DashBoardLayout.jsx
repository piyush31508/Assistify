import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../../components/chatlist/ChatList";
import './dashboardlayout.css';

const RootLayout = () => {
    const { userId, isLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoaded && !userId) {
            navigate("/sign-in");
        }
    }, [isLoaded, userId, navigate]);

    return (
        <div className="rootLayoutContainer">
            <div className="menu">
                <ChatList />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
