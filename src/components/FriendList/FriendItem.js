import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendItem({ name, avatar, isOnline }) {
   return (
      <li className={s.item}>
         <span
            className={
               s.status + ' ' + (isOnline ? s.statusGreen : s.statusRed)
            }
         ></span>
         <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
         <p className={s.name}>{name}</p>
      </li>
   );
}

FriendItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
};
