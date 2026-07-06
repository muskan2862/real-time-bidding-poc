import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuctionContext } from "../context/AuctionContext";
import useWebSocket from "../hooks/useWebSocket";
import { sanitizeInput } from "../utils/sanitize";
import { validateBid } from "../utils/validators";

const BidForm = () => {
  const { auction } = useContext(AuctionContext);
  const { placeBid } = useWebSocket(() => {});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const bidder = sanitizeInput(data.bidder);
    const amount = Number(data.amount);

    const validation = validateBid(
      bidder,
      amount,
      auction.highestBid
    );

    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    placeBid({
      bidder,
      amount,
      time: new Date().toLocaleTimeString(),
    });

    console.log(
      "[Analytics] User interacted with Real-Time Bidding POC"
    );

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Bidder Name"
        {...register("bidder", {
          required: "Name is required",
        })}
      />
      {errors.bidder && (
        <p style={{ color: "red" }}>{errors.bidder.message}</p>
      )}

      <br />
      <br />

      <input
        type="number"
        placeholder="Bid Amount"
        {...register("amount", {
          required: "Amount is required",
        })}
      />
      {errors.amount && (
        <p style={{ color: "red" }}>{errors.amount.message}</p>
      )}

      <br />
      <br />

      <button type="submit">Place Bid</button>
    </form>
  );
};

export default BidForm;