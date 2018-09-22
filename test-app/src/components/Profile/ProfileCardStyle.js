import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  height: 400px;
  background: #fdfeff;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 8px 40px rgba(#000000, 0.2);
`;

export const TopIcons = styled.div`
  margin-top: 10px;
  height: 50px;
  padding: 0 10px 0 10px;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 24px !important;
  height: 24px !important;
  color: #2d354a;
`;

export const BackIcon = Icon.extend`
  float: left;
`;

export const HeartIcon = Icon.extend`
  float: right;
  margin-left: 10px !important;
`;

export const SettingIcon = Icon.extend`
  float: right;
`;

export const Profile = styled.div``;

export const Avatar = styled.img`
  width: 124px;
  height: 124px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
  border-radius: 100%;
  border: 3px solid #ff48a0;
`;

export const Name = styled.h3`
  color: #2d354a;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const Title = styled.p`
  color: #a253f7;
  font-size: 0.95em;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: #080911;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1.3em;
`;

export const HireButton = styled.button`
  color: #fff;
  width: 130px;
  height: 42px;
  outline: none;
  border: none;
  display: block;
  cursor: pointer;
  font-weight: 300;
  margin-left: auto;
  margin-right: auto;
  border-radius: 70px;
  box-shadow: 0 13px 26px rgba(#000, 0.16), 0 3px 6px rgba(#000, 0.16);
  background: linear-gradient(
    45deg,
    rgba(205, 78, 236, 1) 0%,
    rgba(152, 6, 188, 1) 100%
  );
  h1 {
    font-size: 20px;
    text-align: center;
    margin-top: 8px;
  }
`;
