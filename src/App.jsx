import { useContext } from "react";

import Header from "./components/Header";
import AuctionCard from "./components/AuctionCard";
import BidForm from "./components/BidForm";
import BidHistory from "./components/BidHistory";
import LoadingSpinner from "./components/LoadingSpinner";

import { AuctionContext } from "./context/AuctionContext";

import useWebSocket from "./hooks/useWebSocket";

import "./index.css";

function App() {
  const { auction, updateAuction } = useContext(AuctionContext);

  useWebSocket(updateAuction);

  if (auction.loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      <Header />

      <main className="main-content">
        <AuctionCard />

        <BidForm />

        <BidHistory />
      </main>
    </div>
  );
}

export default App;