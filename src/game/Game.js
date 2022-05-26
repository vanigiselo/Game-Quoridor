import React, { useState, useCallback, useRef, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { WEBSOCKET_URL, AUTH_TOKEN } from "./constants";    
import {} from "../game/Board";
import {} from "../game/constants";
import {placedWall,  moveSend} from "../movePieces/MovePieces";
import {} from "../movePieces/PiecesSelect";
import {makeMove, your_turn} from "../websocket/Turn";

export const Turn = (your_turn) => {
 if (your_turn = true){


  
 } 
 else if (makeMove = true) {
   console.log(totalPoints);
 }
}
export const Point = (placedWall,  moveSend) => {
    const totalPoints= 0
    totalPoints = placedWall + moveSend;
}
export const Game = () => {
  
  const [socketUrl, setSocketUrl] = useState(WEBSOCKET_URL + AUTH_TOKEN);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    socketUrl,
    {
      shouldReconnect: () => true,
    }
  );
  
  
  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl(socketUrl),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
};