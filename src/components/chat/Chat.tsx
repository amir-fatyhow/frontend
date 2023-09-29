import React from 'react';
import './Chat.css';

const Chat = () => {
    return (
        <div>
            <div className="container">
                <div className="chatbox">
                    <div className="top-bar">
                        <div className="avatar"><p>V</p></div>
                        <div className="name">Voldemort</div>
                        <div className="icons">
                            <i className="fas fa-phone"></i>
                            <i className="fas fa-video"></i>
                        </div>
                        <div className="menu">
                            <div className="dots"></div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="voldemort">
                            <div className="incoming">
                                <div className="bubble">Hey, Father's Day is coming up..</div>
                                <div className="bubble">What are you getting.. Oh, oops sorry dude.</div>
                            </div>
                            <div className="outgoing">
                                <div className="bubble lower">Nah, it's cool.</div>
                                <div className="bubble">Well you should get your Dad a cologne. Here smell it. Oh wait!
                                    ...
                                </div>
                            </div>
                            <div className="typing">
                                <div className="bubble">
                                    <div className="ellipsis one"></div>
                                    <div className="ellipsis two"></div>
                                    <div className="ellipsis three"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bar">
                        <div className="chat">
                            <input type="text" placeholder="Type a message..."/>
                            <button type="submit"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
                <div className="messages"></div>
                <div className="profile">
                    <div className="avatar"><p>H</p></div>
                    <div className="name2">Harry<p className="email">Harry@potter.com</p></div>
                </div>
                <ul className="people">
                    <li className="person focus">
                        <span className="title">Voldemort </span>
                        <span className="time">2:50pm</span><br/>
                        <span className="preview">What are you getting... Oh, oops...</span>
                    </li>
                    <li className="person">
                        <span className="title">Ron</span>
                        <span className="time">2:25pm</span><br/>
                        <span className="preview">Meet me at Hogsmeade and bring...</span>
                    </li>
                    <li className="person">
                        <span className="title">Hermione</span>
                        <span className="time">2:12pm</span><br/>
                        <span className="preview">Have you and Ron done your hom...</span>
                    </li>
                </ul>
            </div>
            <footer>
                <p>made by <a href="https://codepen.io/juliepark"> julie</a> ♡</p>
            </footer>
        </div>
    );
};

export default Chat;