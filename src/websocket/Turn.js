import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"; 
import { WEBSOCKET_URL, AUTH_TOKEN } from "./constants"; 
import { selectedPiece} from "../movePieces/PiecesSelect"; 
import {makeMove, verticalWall, buildWall} from "../movePieces/MovePieces"

let yourTurn = {
      
  action: "your_turn",
  data: {
      player_1: "uno",
      player_2: "dos",
      score_2: 0.0,
      walls: 10.0,
      score_1: 0.0,
      side: "N",
      remaining_moves: 50.0,
      board: "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
      turn_token: " ",
      game_id: " "
  }
}
  
  export function makeMove(game_id, turn_token, game) {
    
    moveSend = {
      action: "move",
      data: {
        game_id: game_id,
        turn_token: turn_token,
        from_row: move.from_row,
        from_col: move.from_col,
        
        to_row: move.to_row,
        to_col: move.from_col,
        remaining_moves: 50.0,
        side: "S",
      },
    };
    return moveSend;
  }