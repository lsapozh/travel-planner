import React, { Component } from "react";
import TripsList from "../../components/TripsList";
import Header from "../HomePageHeader";
import { connect } from "react-redux";
import { asyncLoadData } from "./actions";
import { Container } from "./components";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(asyncLoadData());
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <Header />
        <TripsList trips={this.props.trips} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.homePage.isLoading,
  trips: state.homePage.trips
});

export default connect(mapStateToProps)(HomePage);
