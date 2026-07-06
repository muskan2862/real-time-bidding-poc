import { useContext } from "react";
import { AuctionContext } from "../context/AuctionContext";

const AuctionCard = () => {
  const { auction } = useContext(AuctionContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
        background: "#fff",
      }}
    >
      <h2>{auction.itemName}</h2>

      <p>
        <strong>Highest Bid:</strong> ₹{auction.highestBid}
      </p>

      <p>
        <strong>Highest Bidder:</strong> {auction.highestBidder}
      </p>
    </div>
  );
};

export default AuctionCard;