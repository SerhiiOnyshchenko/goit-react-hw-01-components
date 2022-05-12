import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const { username, tag, location, avatar, stats } = user;
const App = () => {
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            paddingTop: '30px',
         }}
      >
         <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
         />
         <Statistics title="Upload stats" stats={data} />
         <Statistics stats={data} />
         <FriendList friends={friends} />
         <TransactionHistory items={transactions} />
      </div>
   );
};

export default App;
