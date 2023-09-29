import React, {useRef, useState} from 'react';
import Authorization from "./components/authorization/Authorization";
import Request from "./request";
import Points from "./components/points/Points";
import './App.css'

const server: Request = new Request();
function App() {
    let user = useRef("");
    const [state, setState] = useState('authorization');

    function setPoints(login: string) {
        user.current = login;
        setState('points')
    }

    function setSign() {
        setState('authorization')
    }

    return (
    <>
        {
            state === 'authorization' ?
                <Authorization request={server} setPoints={setPoints}/> :
            state === 'points' ?
                <Points request={server} setSign={setSign} user={user.current}/> : <Authorization request={server} setPoints={setPoints}/>
        }
    </>
  );
}

export default App;

