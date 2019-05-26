import React from "react";
import { connect } from "react-redux";
import Cities from "../../components/Cities";

const mapStateToProps = (state, ownProps) => ({
  cities: state.tripPage.cities.filter(c => {
    return c.countryId === ownProps.countryId;
  })
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
