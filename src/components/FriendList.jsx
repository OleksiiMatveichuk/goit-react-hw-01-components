import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
        {friends.map((el) => {
      return <li className="item" key={el.id}>
          {el.isOnline ? <span className="status-friendList" style={{
              backgroundColor: 'green',
          }}></span> : <span className="status-friendList" style={{
              backgroundColor: 'red',}}></span>}
  <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
          <p className="name">{el.name}</p>
</li>
  })}
</ul>)
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};