import s from './FriendList.module.css';
import  PropTypes  from 'prop-types';

function FriendList({friends}) {
	return (
      <ul className={s.friendList}>
         {friends.map(friend => {
            return (
               <li className={s.item} key={friend.id}>
                  <span
                     className={
                        friend.isOnline
                           ? s.status + ' ' + s.statusGreen
                           : s.status + ' ' + s.statusRed
                     }
                  ></span>
                  <img
                     className={s.avatar}
                     src={friend.avatar}
                     alt="User avatar"
                     width="48"
                  />
                  <p className={s.name}>{friend.name}</p>
               </li>
            );
         })}
      </ul>
   );
}


FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired,
      })
   ),
};

export default FriendList;