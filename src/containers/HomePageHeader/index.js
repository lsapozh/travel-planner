import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import {
  Container,
  ButtonNewTrip,
  SearchForm,
  Input,
  Background
} from "./components";
import { asyncLoadData } from "../HomePage/actions";
import { Button } from "../../ui/buttonIcons";
import { clearReduxState } from "../NewTripPage/actions";

class HomePageHeader extends Component {
  onInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.dispatch(asyncLoadData(this.state.value));
  };

  toNewTripPage = e => {
    e.preventDefault();
    this.props.dispatch(clearReduxState());
    this.props.dispatch(push(`/new-trip`));
  };

  render() {
    return (
      <Container>
        <ButtonNewTrip onClick={this.toNewTripPage}>
          Plan New Trip
        </ButtonNewTrip>
        <SearchForm onSubmit={this.onSubmitForm}>
          <Input placeholder={"Search"} onChange={this.onInputChange} />
          <Button onClick={this.onSubmitForm}>
            {" "}
            <i className="fas fa-search" />{" "}
          </Button>
        </SearchForm>
      </Container>
    );
  }
}

export default connect()(HomePageHeader);
