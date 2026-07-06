import { useEffect } from "react";
import { socket } from "../services/socket";

const useWebSocket = (onBidUpdate) => {
  useEffect(() => {
    socket.on("bidUpdated", onBidUpdate);

    return () => {
      socket.off("bidUpdated", onBidUpdate);
    };
  }, [onBidUpdate]);

  const placeBid = (bid) => {
    socket.emit("placeBid", bid);
  };

  return { placeBid };
};

export default useWebSocket;