import React from "react";
import { connect } from "react-redux";
import Countries from "../../components/Countries";

const mapStateToProps = state => ({
  countries: state.tripPage.countries || null
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
