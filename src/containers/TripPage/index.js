import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { Container, Form, Date } from "./components";
import Header from "../../components/TripPageHeader/";
import Map from "../../components/Map";
import { asyncLoadData } from "./actions";
import { push } from "react-router-redux";
import Forms from "../../components/Forms";
import { setAutoFocus } from "../NewTripPage/actions";
import { updateData, deleteTrip } from "../../api";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Confirmation from "../../components/Confirmation";

class TripPage extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    const id = queryString.parse(this.props.location.search).id;
    // почему не работает так

    // this.props.dispatch(asyncLoadData(id)).then(() => {
    //   console.log(this.props.trip)
    //   this.setState({ ...nextProps.trip })
    // });
    this.props.dispatch(setAutoFocus(false));
    this.props.dispatch(asyncLoadData(id));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trip !== this.props.trip) {
      this.setState({
        ...nextProps.trip,
        title: nextProps.trip.title || "",
        isLoading: false
      });
    }
  }

  getTrip = () => {
    return {
      id: this.state.id,
      months: this.state.months,
      title: this.state.title,
      countries: this.accumulateItems("countries"),
      cities: this.accumulateItems("cities"),
      countriesList: this.props.countries.map(c => c.id),
      citiesList: this.props.cities.map(c => c.id),
      placesList: this.props.places.map(c => c.id)
    };
  };

  accumulateItems = itemType => {
    return this.props[itemType].reduce((acc, value, index) => {
      if (index === 0) {
        return `${value.name}`;
      }
      return `${acc}, ${value.name}`;
    }, "");
  };

  updateTrip = e => {
    e.preventDefault();
    updateData(
      {
        countries: this.props.countries,
        cities: this.props.cities,
        places: this.props.places
      },
      this.getTrip()
    ).then(response => this.props.dispatch(push(`/trip?id=${response.id}`)));
  };

  onDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <Confirmation onClose={onClose} deleteTrip={this.deleteTrip} />;
      }
    });
  };

  deleteTrip = () => {
    deleteTrip(this.state.id);
    this.props.dispatch(push(`/`));
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div>loading...</div>;
    }
    return (
      <Container>
        <Header
          title={this.state.title}
          onInputChange={this.onInputChange}
          saveTrip={this.updateTrip}
          isActiveDelete={true}
          deleteTrip={this.onDelete}
        />
        <Forms onInputChange={this.onInputChange} months={this.state.months} />
        <Map title={"Map"} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.tripPage.isLoading,
  trip: state.tripPage.trip || {},
  countries: state.tripPage.countries,
  cities: state.tripPage.cities,
  places: state.tripPage.places
});

export default connect(mapStateToProps)(TripPage);
