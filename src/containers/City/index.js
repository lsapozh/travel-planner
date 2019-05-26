import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ContainerFocus as Container,
  Info,
  Form,
  Row,
  Input
} from "../../ui/items";
import { Button } from "../../ui/buttonIcons";
import Textarea from "react-textarea-autosize";
import { deleteCity, updateCity } from "../NewTripPage/actions";
import Places from "../Places";

class City extends Component {
  state = {
    city: {
      id: "",
      name: "",
      days: "",
      way: "",
      costTickets: "",
      costHotels: "",
      countryId: ""
    },
    checkButtonActive: false
  };

  componentDidMount() {
    this.setState({
      city: {
        ...this.props.city
      }
    });
  }

  onInputChange = e => {
    e.preventDefault();
    this.setState({
      city: { ...this.state.city, [e.target.name]: e.target.value }
    });
  };

  onSubmitForm = e => {
    this.setState({
      checkButtonActive: false
    });
    e.preventDefault();
    this.props.dispatch(updateCity(this.state.city));
  };

  deleteCity = event => {
    event.preventDefault();
    this.props.dispatch(deleteCity(this.state.city.id));
  };

  onBlur = () => {
    let isEqual = true;
    for (let key in this.state.city) {
      if (this.props.city[key] !== this.state.city[key]) isEqual = false;
    }

    if (isEqual) this.setState({ checkButtonActive: false });
  };

  onFocus = () => this.setState({ checkButtonActive: true });

  render() {
    return (
      <Container>
        <Form
          onSubmit={this.onSubmitForm}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <Info>
            <Row>
              <Input style={{ width: "80%" }}>
                <label>Город</label>
                <Textarea
                  name={"name"}
                  style={{ minHeight: "25px" }}
                  onChange={this.onInputChange}
                  value={this.state.city.name}
                  autoFocus={this.props.autofocus}
                />
              </Input>
              <Input style={{ width: "20%" }}>
                <label>Сколько дней</label>
                <Textarea
                  name={"days"}
                  style={{ minHeight: "25px" }}
                  onChange={this.onInputChange}
                  value={this.state.city.days}
                />
              </Input>
            </Row>
            <Row>
              <Input style={{ width: "100%" }}>
                <label>Как добраться</label>
                <Textarea
                  name={"way"}
                  style={{ minHeight: "80px" }}
                  onChange={this.onInputChange}
                  value={this.state.city.way}
                />
              </Input>
            </Row>
            <Row>
              <Input style={{ width: "50%" }}>
                <label>Стоимость билетов</label>
                <Textarea
                  name={"costTickets"}
                  style={{ minHeight: "25px" }}
                  onChange={this.onInputChange}
                  value={this.state.city.costTickets}
                />
              </Input>
              <Input style={{ width: "50%" }}>
                <label>Стоимость отелей</label>
                <Textarea
                  name={"costHotels"}
                  style={{ minHeight: "25px" }}
                  onChange={this.onInputChange}
                  value={this.state.city.costHotels}
                />
              </Input>
            </Row>
          </Info>
          <Button active={this.state.checkButtonActive}>
            <i className="fas fa-check" />
          </Button>
        </Form>
        <Button onClick={this.deleteCity}>
          <i className="far fa-trash-alt" />
        </Button>
        <Places cityId={this.state.city.id} cityName={this.state.city.name} />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  city: state.tripPage.cities.find(c => c.id === ownProps.id),
  autofocus: state.tripPage.autofocus
});

export default connect(mapStateToProps)(City);
