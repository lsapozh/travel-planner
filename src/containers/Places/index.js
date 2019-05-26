import React from "react";
import { Button } from "../../ui/buttonIcons";
import { connect } from "react-redux";
import { Container } from "./components";
import { addPlace } from "../NewTripPage/actions";
import Place from "../Place";

const Places = ({ places, cityId, cityName, dispatch }) => {
  return (
    <Container>
      <div>
        <div>{cityName}</div>
        <span>Места для посещения</span>
        <Button onClick={() => dispatch(addPlace(cityId))}>
          <i className="fas fa-plus" />
        </Button>
      </div>
      {places.map(place => (
        <Place key={place.id} id={place.id} cityId={cityId} />
      ))}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  places: state.tripPage.places.filter(c => {
    return c.cityId === ownProps.cityId;
  })
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
