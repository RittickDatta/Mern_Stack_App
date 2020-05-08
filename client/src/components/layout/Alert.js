import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null && alerts.length > 0 && alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          { alert.msg }
      </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert, //What we see in the redux chrome tool, alert to a local prop variable, alerts
});

export default connect(mapStateToProps)(Alert);
