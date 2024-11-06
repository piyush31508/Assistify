import { Link } from 'react-router-dom';
import pic from '../../images/pic.jpg';
import './Homepage.css';
import ReactTypingEffect from 'react-typing-effect';
import { useAuth } from '@clerk/clerk-react';

const HomePage = () => {
    const { userId, isLoaded } = useAuth();

    return (
        <>
            <div className="ml-5 flex items-center gap-20 h-full w-full">
                <div className="left flex flex-col flex-1 justify-center gap-4 text-center">
                    <h1 className="text-[3.5rem] bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Assistify
                    </h1>
                    <h2>Transforming Dialogue into Action.</h2>
                    <h3 className="font-normal"> {/* Updated font class */}
                        Assistify harnesses the power of AI to revolutionize your communication. Built on advanced gemini technology, Assistify offers personalized assistance, seamless interactions, and insightful responses tailored to your needs. Whether you're seeking information, support, or a creative partner, Assistify transforms every conversation into a valuable experience. Discover the future of intelligent communication and let Assistify enhance your daily tasks with efficiency and ease.
                    </h3>
                    <div className="flex w-full justify-center gap-4">
                        {isLoaded && (
                            <div>
                                {!userId ? (
                                    <Link
                                        className='px-4 py-2 text-white rounded-xl bg-[#498bb6] hover:bg-white hover:text-[#498bb6]'
                                        to="/sign-up"
                                    >
                                        Get Started
                                    </Link>
                                ) : (
                                    <Link
                                        className='px-4 py-2 text-white rounded-xl bg-[#498bb6] hover:bg-white hover:text-[#498bb6]'
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="right flex-1">
                    <div className="imgContainer">
                        <img src={pic} alt="Logo" width={400} height={400} />
                        <div className="chat">
                            <img src={pic} alt="user" />
                            <ReactTypingEffect
                                text={[
                                    'Turning data into insights, and insights into progress',
                                    'Where your curiosity meets Assistify’s creativity',
                                    'Intelligence, amplified: Assistify’s at your side, every step of the way',
                                    'Unleashing potential through precision and passion'
                                ]}
                                speed={100}
                                eraseDelay={2000}
                                className="chatText"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
