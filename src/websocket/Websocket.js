import { useState } from "react";
import { makeMove, moveToSend, yourTurn } from "./Turn";

export const useWebSocket = (webSocketConnection) => {
  const [lastMessage, setLastMessage] = useState(null);
  if (webSocketConnection) {
    webSocketConnection.onmessage = (message) => {
      setLastMessage(message); 
      console.log("new message received: " + message.data);
        let sendData = JSON.parse(message.data);
        if (sendData.turn === "challenge"){
           let messageSend = {
             action: "accept_challege",
             data: { 
               Data: sendData.data.game_id,
           },
         };
        webSocketConnection.send(JSON.stringify(msjeToSend)); 
      } else if (sendData.turn === "turn_token") {
         let moveSend = makeMove 
              }
      webSocketConnection.send(JSON.stringify(msjeToSend)); 
      
      
    };
  }
  return { lastMessage};
}