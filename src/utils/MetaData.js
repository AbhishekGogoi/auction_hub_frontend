import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "Auction Hub is a platform for buying and selling of vehicles, properties, and other items."
        }
      />
      <meta
        name="keywords"
        content="Auction Hub, Buy, Sell, Auction, Bidding, Vehicles, Properties, Items"
      />
    </Helmet>
  );
};

export default MetaData;
