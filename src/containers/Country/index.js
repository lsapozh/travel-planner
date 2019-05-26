import React, { Component } from "react";
import { Button } from "../../ui/buttonIcons";
import { Form, Container, Input } from "./components";
import { connect } from "react-redux";
import { deleteCountry, updateCountry } from "../NewTripPage/actions";
import Cities from "../Cities";

class Country extends Component {
  state = {
    country: {
      id: "",
      name: ""
    },
    checkButtonActive: false
  };

  componentDidMount() {
    this.setState({
      country: {
        id: this.props.country.id,
        name: this.props.country.name || ""
      }
    });
  }

  onInputChange = event => {
    this.setState({
      country: { ...this.state.country, name: event.target.value }
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({ checkButtonActive: false });
    this.changeFocus();
    this.props.dispatch(updateCountry(this.state.country));
  };

  deleteCountry = event => {
    event.preventDefault();
    this.props.dispatch(deleteCountry(this.state.country.id));
  };

  changeFocus = () => {
    document.getElementById(`input${this.state.country.id}`).blur();
    document.getElementById(`button${this.state.country.id}`).focus();
  };

  onBlur = () => {
    let isEqual = true;
    for (let key in this.state.country) {
      if (this.props.country[key] !== this.state.country[key]) {
        isEqual = false;
      }
    }
    if (isEqual) this.setState({ checkButtonActive: false });
  };

  onFocus = () => this.setState({ checkButtonActive: true });

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmitForm}>
          <Input
            id={`input${this.state.country.id}`}
            onChange={this.onInputChange}
            placeholder={"Страна"}
            autoFocus={this.props.autofocus}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={this.state.country.name}
          />
          <Button
            active={this.state.checkButtonActive}
            id={`button${this.state.country.id}`}
          >
            <i className="fas fa-check" />
          </Button>
        </Form>
        <Button onClick={this.deleteCountry}>
          <i className="far fa-trash-alt" />
        </Button>
        <Cities countryId={this.state.country.id} />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  country: state.tripPage.countries.find(c => c.id === ownProps.id) || {},
  autofocus: state.tripPage.autofocus
});

export default connect(mapStateToProps)(Country);
