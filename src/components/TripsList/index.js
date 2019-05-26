import React from "react";
import Trip from "../../containers/Trip";
import { Trips, NoResults } from "./components";

const TripsList = ({ trips = [] }) => {
  if (trips.length === 0) {
    return <NoResults>No results found</NoResults>;
  }
  return (
    <Trips>
      {trips.map(trip => {
        return <Trip key={trip.id} trip={trip} />;
      })}
    </Trips>
  );
};

export default TripsList;
