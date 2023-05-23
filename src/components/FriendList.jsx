export const FriendList = ({friends}) => {
    return (<ul className="friend-list">
        {friends.map((el) => {
      return <li className="item" key={el.id}>
          {friends.isOnline ? <span className="status" style={{
              display: "block",
              backgroundColor: 'green',
              borderRadius: '50%',
              width: '20px',
              height: '20px,'
          }}></span> : <span className="status" style={{
                  display: 'block',
              borderRadius: '50%',
              backgroundColor: 'red',
              width: '20px',
          height: '20px'}}></span>}
  <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
          <p className="name">{el.name}</p>
</li>
  })}
</ul>)
}