import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from './path/to/user.json'
import data from './path/to/data.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
			  display: 'flex',
		  flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
		  <Profile
			  username={user.username}
			  tag={user.tag}
			  location={user.location}
			  avatar={user.avatar}
			  stats={user.stats}
		  />
		  <Statistics
			  title="Upload stats"
			  stats={data}
		  />
		  <Statistics
			  stats={data}
		  />
    </div>
  );
};
