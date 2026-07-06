export const validateBid = (bidder, amount, currentBid) => {
  if (!bidder || bidder.trim().length < 2) {
    return {
      valid: false,
      message: "Bidder name must be at least 2 characters.",
    };
  }

  if (isNaN(amount)) {
    return {
      valid: false,
      message: "Bid amount must be a number.",
    };
  }

  if (amount <= currentBid) {
    return {
      valid: false,
      message: "Bid must be greater than the current highest bid.",
    };
  }

  return {
    valid: true,
  };
};