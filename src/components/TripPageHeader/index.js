import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { Button, Header, Title } from "./components";
import { Button as ButtonIcon } from "../../ui/buttonIcons";

class TripPageHeader extends Component {
  render() {
    return (
      <Header>
        <div>
          <ButtonIcon
            className={"icon"}
            onClick={() => this.props.dispatch(push("/"))}
          >
            <i className="fas fa-arrow-left" />
          </ButtonIcon>
          <Title
            value={this.props.title}
            onChange={this.props.onInputChange}
            name="title"
          />
        </div>
        <div>
          {this.props.isActiveDelete === true ? (
            <Button
              active={this.props.isActiveDelete}
              onClick={this.props.deleteTrip}
            >
              Удалить
            </Button>
          ) : (
            <div />
          )}
          <Button onClick={this.props.saveTrip}>Сохранить</Button>
        </div>
      </Header>
    );
  }
}

export default connect()(TripPageHeader);
