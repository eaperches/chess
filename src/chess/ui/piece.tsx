import React from "react";
import { IUIPiece } from "../model/Interfaces";
import { Image } from "react-konva";

const UIPiece: React.FC<IUIPiece> = (props) => {
    return (
        <Image 
            image
            draggable
        />
    )

}

export default UIPiece;