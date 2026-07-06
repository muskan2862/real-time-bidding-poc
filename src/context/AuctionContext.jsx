import { createContext, useState } from "react";

export const AuctionContext = createContext();

export const AuctionProvider = ({ children }) => {
  const [auction, setAuction] = useState({
    itemName: "Vintage Painting",
    highestBid: 1000,
    highestBidder: "No Bids Yet",
    bidHistory: [],
    loading: false,
  });

  const updateAuction = (newBid) => {
    setAuction((prev) => ({
      ...prev,
      highestBid: newBid.amount,
      highestBidder: newBid.bidder,
      bidHistory: [newBid, ...prev.bidHistory],
    }));
  };

  return (
    <AuctionContext.Provider value={{ auction, updateAuction }}>
      {children}
    </AuctionContext.Provider>
  );
};