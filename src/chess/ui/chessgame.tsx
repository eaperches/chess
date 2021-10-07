import React from "react";
import { IUIChessGame } from "../model/Interfaces";
import Game from "../model/game"
import { socket } from "../../connections/socket";

type State = {
    gameState: Game,
    whiteKingInCheck: boolean,
    blackKingInCheck: boolean
}

class UIChessGame extends React.Component<IUIChessGame, State> {
    state: State = {
        gameState: new Game({isWhite: this.props.isWhite, chessBoard: []}),
        whiteKingInCheck: false,
        blackKingInCheck: false
    }

    componentDidMount() {
        // register event listeners for socket.io
        socket.on("opponent move", (move: any) => {
            // todo
        })
    }

    movePiece(selectedId: number, finalPosition: any) {
    }
 
    render() {
        return (
            <div>
            </div>
        )
    }

}

export default UIChessGame;