import React from "react";
import { Button } from "../../ui/buttonIcons";
import Country from "../../containers/Country";
import { addCountry, setAutoFocus } from "../../containers/NewTripPage/actions";

const Countries = ({ countries, dispatch }) => {
  return (
    <div style={{ padding: "50px" }}>
      <div>
        <span>Страны</span>
        <Button
          onClick={() => {
            dispatch(addCountry());
            dispatch(setAutoFocus(true));
          }}
        >
          <i className="fas fa-plus" />
        </Button>
      </div>
      {countries.map(country => <Country key={country.id} id={country.id} />)}
    </div>
  );
};

export default Countries;
