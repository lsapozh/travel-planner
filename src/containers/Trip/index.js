import React from "react";
import { Container, Period, Countries, Cities } from "./components";
import { loadPoster } from "../../api";
import { push } from "react-router-redux";
import { connect } from "react-redux";

class Trip extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    const value =
      this.props.trip.countries.split(",")[0].toLowerCase() || undefined;
    loadPoster(value).then(data => {
      this.setState({
        isLoading: false,
        poster: data.url
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>is loading...</div>;
    }
    return (
      <Container
        onClick={() =>
          this.props.dispatch(push(`/trip?id=${this.props.trip.id}`))
        }
        style={{
          backgroundImage: `url(${this.state.poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Countries>{this.props.trip.countries}</Countries>
        <Cities>{this.props.trip.cities}</Cities>
        <Period>{this.props.trip.months}</Period>
      </Container>
    );
  }
}

export default connect()(Trip);
