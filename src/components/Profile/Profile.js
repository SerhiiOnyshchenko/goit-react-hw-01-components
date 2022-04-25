import s from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div class={s.profile}>
      <div class={s.description}>
        <img src={avatar} alt="User avatar" class={s.avatar} />
        <p class={s.name}>{username}</p>
        <p class={s.tag}>{tag}</p>
        <p class={s.location}>{location}</p>
      </div>

      <ul class={s.stats}>
        <li>
          <span class={s.label}>Followers</span>
          <span class={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span class={s.label}>Views</span>
          <span class={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span class={s.label}>Likes</span>
          <span class={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};

export default Profile;
