import React from "react";
import {
  Wrapper,
  TopIcons,
  BackIcon,
  HeartIcon,
  SettingIcon,
  Profile,
  Avatar,
  Name,
  Title,
  Description,
  HireButton
} from "./ProfileCardStyle";
import {
  faAngleLeft,
  faEllipsisV,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const ProfileCard = props => (
  <Wrapper>
    <TopIcons>
      <BackIcon icon={faAngleLeft} />
      <HeartIcon icon={faEllipsisV} />
      <SettingIcon icon={faHeart} />
    </TopIcons>

    <Profile>
      <Avatar src={props.image} />
      <Name>{props.name}</Name>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <HireButton>
        <h1>Hire Me</h1>
      </HireButton>
    </Profile>
  </Wrapper>
);

export default ProfileCard;
