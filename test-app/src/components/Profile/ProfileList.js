import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import { connect } from "react-redux";
import * as actions from "../../actions/profile";
import { Container } from "./ProfileListStyle";

const mapStateToProps = state => {
  const { profiles } = state.profile;
  console.log(profiles);
  return { profiles };
};

const mapDispatchToProps = {
  getProfiles: actions.getProfiles
};

class ProfileList extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    return (
      <Container>
        {this.props.profiles.map(profile => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileList);
