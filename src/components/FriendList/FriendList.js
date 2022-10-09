import PropTypes from 'prop-types';
import { backgroundColor, color } from 'styled-system';
import { Status } from './friends.styled';
export const FriendList = ({ avatar, name, isOnline = true }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
