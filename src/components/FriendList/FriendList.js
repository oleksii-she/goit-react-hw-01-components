import PropTypes from 'prop-types';
import { Status, Text } from './friends.styled';
export const FriendList = ({ avatar, name, isOnline = true }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Text className="name">{name}</Text>
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
