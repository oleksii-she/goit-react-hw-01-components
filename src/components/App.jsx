//стиль контейнер
import { Container } from './container.styled';

// cоц мережа
import { Profle } from './profile/Profile.js';
import user from './profile/user.json';

// статистика
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics.js';

// Список друзів
import friends from './FriendList/friends.json';
import { FriendListItems } from './FriendList/FriendListItems.js';

//Історія транзакцій
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';

export const App = () => {
  return (
    <Container>
      <Profle
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />,
      <FriendListItems items={friends} />,
      <TransactionHistory items={transactions} />
    </Container>
  );
};
