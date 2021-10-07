import { Image } from "konva/lib/shapes/Image";

export interface IChessPiece {
    id: string,
    name: string,
    isWhite: boolean,
    isAttacked: boolean 
}

export interface ISquare {
    x: Number,
    y: Number,
    canvasCoordinates: [Number, Number],
    piece: IChessPiece,
    
}

export interface IGame {
    isWhite: boolean,
    chessBoard: IBoard,
}

export interface IBoard {

}

export interface IUIPiece {
}

export interface IUIChessGame {
    isWhite: boolean,
}

export interface IStatusUpdate {
    userName?: any,
    gameId?: any,
    mySocketId?: any

}