import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { TouchableOpacity } from "react-native";
// NativeBase Components
import { Text } from "native-base";
class Logout extends React.Component {
  handleLogout = () => {
    this.props.logout(this.props.navigation);
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.handleLogout()}>
        <Text style={{ color: "#f1c601", fontWeight: "600", paddingRight: 20 }}>
          Logout
        </Text>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(actions.logout(navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
