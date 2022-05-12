import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

export default function StaticticItem({ label, percentage }) {
   return (
      <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
         <span className={s.label}>{label}</span>
         <span className={s.percentage}>{percentage}%</span>
      </li>
   );
}

StaticticItem.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
};
