import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend__list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={s.friends__item} key={id}>
          <span className={isOnline ? s.online : s.offline}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="40" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
