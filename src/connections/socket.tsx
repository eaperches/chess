import { io } from "socket.io-client";
import { IStatusUpdate } from "../chess/model/Interfaces";

const url = ''; // todo: host app in heroku or github

const socket = io(url);

var mySocketId;

socket.on("createNewGame", (statusUpdate: IStatusUpdate) => {
    console.log("A new game has been created!"
        + "\nUsername: " + statusUpdate.userName
        + "\nGame id: " + statusUpdate.gameId
        + "\nSocket id: " + statusUpdate.mySocketId
    )
})

export { socket, mySocketId }
