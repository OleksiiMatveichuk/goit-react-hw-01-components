import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(el => {
        return (
          <li className="item" key={el.id}>
            {el.isOnline ? (
              <span
                className="status-friendList"
                style={{
                  backgroundColor: 'green',
                }}
              >
                {' '}
              </span>
            ) : (
              <span
                className="status-friendList"
                style={{
                  backgroundColor: 'red',
                }}
              ></span>
            )}
            <img
              className="avatar"
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{el.name}</p>
          </li>
        );
      })}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
