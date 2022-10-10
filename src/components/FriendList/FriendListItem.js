import { Status, Text, Item } from './friends.styled';

export const FriendListItem = ({ avatar, name, isOnline = true }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Text className="name">{name}</Text>
    </Item>
  );
};
