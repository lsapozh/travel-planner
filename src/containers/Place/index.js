import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Info, Form, Row, Input } from "../../ui/items";
import { Button } from "../../ui/buttonIcons";
import Textarea from "react-textarea-autosize";
import { deletePlace, updatePlace } from "../NewTripPage/actions";

class Place extends Component {
  state = {
    place: {
      id: "",
      name: "",
      schedule: "",
      cost: "",
      way: "",
      details: "",
      cityId: ""
    },
    checkButtonActive: false
  };

  componentDidMount() {
    this.setState({
      place: {
        ...this.props.place
      }
    });
  }

  onInputChange = e => {
    e.preventDefault();
    this.setState({
      place: { ...this.state.place, [e.target.name]: e.target.value }
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({
      checkButtonActive: false
    });
    this.props.dispatch(updatePlace(this.state.place));
  };

  deletePlace = event => {
    event.preventDefault();
    this.props.dispatch(deletePlace(this.state.place.id));
  };

  onBlur = () => {
    let isEqual = true;
    for (let key in this.state.place) {
      if (this.props.place[key] !== this.state.place[key]) isEqual = false;
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
                <label>Место / развлечение</label>
                <Textarea
                  name={"name"}
                  style={{ minHeight: "25px" }}
                  onChange={this.onInputChange}
                  value={this.state.place.name}
                  autoFocus={this.props.autofocus}
                />
              </Input>
              <Input style={{ width: "20%" }}>
                <label>Стоимость</label>
                <Textarea
                  name={"cost"}
                  style={{ minHeight: "25px" }}
                  onChange={this.onInputChange}
                  value={this.state.place.cost}
                />
              </Input>
            </Row>
            <Row>
              <Input style={{ width: "30%" }}>
                <label>Когда работает</label>
                <Textarea
                  name={"schedule"}
                  style={{ minHeight: "50px" }}
                  onChange={this.onInputChange}
                  value={this.state.place.schedule}
                />
              </Input>
              <Input style={{ width: "70%" }}>
                <label>Как добраться</label>
                <Textarea
                  name={"way"}
                  style={{ minHeight: "50px" }}
                  onChange={this.onInputChange}
                  value={this.state.place.way}
                />
              </Input>
            </Row>
            <Row>
              <Input style={{ width: "100%" }}>
                <label>Подробнее</label>
                <Textarea
                  name={"details"}
                  style={{ minHeight: "80px" }}
                  onChange={this.onInputChange}
                  value={this.state.place.details}
                />
              </Input>
            </Row>
          </Info>
          <Button active={this.state.checkButtonActive}>
            <i className="fas fa-check" />
          </Button>
        </Form>
        <Button onClick={this.deletePlace}>
          <i className="far fa-trash-alt" />
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  place: state.tripPage.places.find(p => p.id === ownProps.id),
  autofocus: state.tripPage.autofocus
});

export default connect(mapStateToProps)(Place);
