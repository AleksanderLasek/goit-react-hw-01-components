import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendlist.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
        {friend.isOnline === true ? (
          <span className={styles.status_online}></span>
        ) : (
          <span className={styles.status_offline}></span>
        )}

        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

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
