import s from './FriendList.module.css';
import FriendItem from './FriendItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
   return (
      <ul className={s.friendList}>
         {friends.map(({ id, name, avatar, isOnline }) => (
            <FriendItem
               key={id}
               name={name}
               avatar={avatar}
               isOnline={isOnline}
            />
         ))}
      </ul>
   );
}
FriendList.propTypes = {
   id: PropTypes.number.isRequired,
};
