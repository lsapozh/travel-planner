import React from "react";
import { Button } from "../../ui/buttonIcons";
import City from "../../containers/City";
import { Container } from "./components";
import { addCity } from "../../containers/NewTripPage/actions";

const Cities = ({ cities, countryId, dispatch }) => {
  return (
    <Container>
      <div>
        <span>Города</span>
        <Button onClick={() => dispatch(addCity(countryId))}>
          <i className="fas fa-plus" />
        </Button>
      </div>
      {cities.map(city => (
        <City key={city.id} id={city.id} countryId={countryId} />
      ))}
    </Container>
  );
};

export default Cities;
