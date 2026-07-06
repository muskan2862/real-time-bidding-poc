import { useContext } from "react";
import { AuctionContext } from "../context/AuctionContext";
import EmptyState from "./EmptyState";

const BidHistory = () => {
  const { auction } = useContext(AuctionContext);

  if (auction.bidHistory.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <h3>Bid History</h3>

      <ul>
        {auction.bidHistory.map((bid, index) => (
          <li key={index}>
            {bid.bidder} bid ₹{bid.amount} ({bid.time})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidHistory;