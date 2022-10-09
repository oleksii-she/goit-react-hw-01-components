import { FriendList } from './FriendList.js';
import { Item, List } from './friends.styled';
export const FriendListItems = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <FriendList
            avatar={item.avatar}
            isOnline={item.isOnline}
            name={item.name}
          />
        </Item>
      ))}
    </List>
  );
};
