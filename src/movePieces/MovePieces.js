import { Piece, selectedPiece, wall } from "../movePieces/PiecesSelect";
import { moveSend} from "../websocket/Turn";
import {Col, Row} from "../game/Board";


const moveSend = (Col, Row) => {
    switch (direction) {
      case "up":
        return ![0, 1, 2, 3, 4, 5, 6, 7, 8];
      case "down":
        return ![8, 7, 6, 5, 4, 3, 2, 1, 0];
      case "left":
        return ![8, 7, 6, 5, 4, 3, 2, 1, 0];
      case "right":
        return ![0, 1, 2, 3, 4, 5, 6, 7, 8];
      default:
        return null;
    }
  };

function makeMove () {
    moveSend = true = {
     action: "move",
     data: {
       game_id: "",
       turn_token: "",
       from_row: "",
       from_col: "",
       to_row: "",
       to_col: "",
   }
}
if (moveSend= true){
   moveSend = moveSend + (2*(direction));
} 
return moveSend;
}
function moveFront (){
    selectedPiece = true = {
    action: "moveFront",
    data: {
        game_id: "",
        turn_token: "",
        from_row: 0,
        from_col: 0,
        to_row: 1,
        to_col: 0,  
    }
    }
}

const wallPlace = () => {
    switch (wallToPlace) {
      case "vertical":
        return "||";
      case "horizontal":
        return "-*-";
      default:
        return null;
    }
  };
  const placedWall = () => {
    switch (walls) {
      case 0:
        return null;
      case 1:
        return "wall-up";
      case 2:
        return "wall-down";
      case 3:
        return "wall-up wall-down";
      case 4:
        return "wall-left";
      case 5:
        return "wall-left wall-up";
      case 6:
        return "wall-left wall-down";
      case 7:
        return "wall-left wall-up wall-down";
      case 8:
        return "wall-right";
      case 9:
        return "wall-right wall-up";
      case 10:
        return "wall-right wall-down";
      case 11:
        return "wall-right wall-up wall-down";
      case 12:
        return "wall-right wall-left";
      case 13:
        return "wall-right wall-left wall-up";
      case 14:
        return "wall-right wall-left wall-down";
      case 15:
        return "wall-right wall-left wall-up wall-down";
      default:
        return null;
    }
  }; 
function buildWall(){
    placedWall = {
     action: walls,
     data: {
         game_id: "",
         to_row: "",
         to_col: "",
         orientation: wallToPlace, 
     }
    }
    if (placedWal = true){
        placedWall = placedWall + 3
    }
    return placedWall;
 } 

  timer =={
     if (timer = 20) {
        placedWal = false;    
     }

 }


