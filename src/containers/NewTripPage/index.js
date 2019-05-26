import React, { Component } from "react";
import { Container } from "./components";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { unloadData } from "../../api";
import Map from "../../components/Map";
import Forms from "../../components/Forms";
import Header from "../../components/TripPageHeader";
import { setAutoFocus } from "./actions";
const uuidv1 = require("uuid/v1");

class NewTripPage extends Component {
  state = {
    id: uuidv1(),
    months: "",
    title: "New Trip",
    countriesList: [],
    citiesList: [],
    placesList: []
  };

  componentDidMount() {
    this.props.dispatch(setAutoFocus(true));
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  accumulateItems = itemType => {
    return this.props[itemType].reduce((acc, value, index) => {
      if (index === 0) {
        return `${value.name}`;
      }
      return `${acc}, ${value.name}`;
    }, "");
  };

  getTrip = () => {
    return {
      ...this.state,
      countries: this.accumulateItems("countries"),
      cities: this.accumulateItems("cities"),
      countriesList: this.props.countries.map(c => c.id),
      citiesList: this.props.cities.map(c => c.id),
      placesList: this.props.places.map(c => c.id)
    };
  };

  saveTrip = e => {
    e.preventDefault();
    unloadData(
      {
        countries: this.props.countries,
        cities: this.props.cities,
        places: this.props.places
      },
      this.getTrip()
    ).then(response => this.props.dispatch(push(`/trip?id=${response.id}`)));
  };

  render() {
    return (
      <Container>
        <Header
          title={this.state.title}
          onInputChange={this.onInputChange}
          saveTrip={this.saveTrip}
          isActiveDelete={false}
        />
        <Forms onInputChange={this.onInputChange} months={this.state.months} />
        <Map title={"Add points to map"} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.tripPage.countries,
  cities: state.tripPage.cities,
  places: state.tripPage.places
});

export default connect(mapStateToProps)(NewTripPage);
