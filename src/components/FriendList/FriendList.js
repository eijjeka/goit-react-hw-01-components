import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend__list}>
      {friends.map(friend => (
        <li className={s.friends__item} key={friend.id}>
          <span className={friend.isOnline ? s.online : s.offline}></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="40"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
