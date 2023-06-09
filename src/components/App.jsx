import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { Profile } from './Profile'
import { Statistics } from './Statistics'
import { FriendList } from './FriendList'
import {TransactionHistory} from './TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        padding: '25px',
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
