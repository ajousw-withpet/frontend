import React, { useState } from 'react';
import axios from 'axios';
import crown from '../../assets/crown.png';

function UserItem({
  user, isLeader, handleExpelMember, noneDisplay,
}) {
  console.log(user);
  const [showDiv, setShowDiv] = useState(false);
  const content = (
    <>
      <img
        src={user.profileImg}
        alt="유저 이미지"
        style={{
          border: '1px solid black', width: '28px', height: '28px', borderRadius: '50%', marginRight: '10px',
        }}
      />
      <p>{user.userName}</p>
    </>
  );

  return (
    <div
      onMouseEnter={() => setShowDiv(true)}
      onMouseLeave={() => setShowDiv(false)}
      onClick={() => handleExpelMember(user.userId)}
      style={{
        width: '120px', backgroundColor: showDiv && isLeader ? 'red' : 'white', display: noneDisplay === user.userId ? 'none' : 'flex', marginLeft: '30px', alignItems: 'center', border: '1px solid rgb(200, 200, 200)', height: '40px', borderRadius: '5px', padding: '0px 10px', justifyContent: 'center',
      }}
    >
      { showDiv && isLeader ? <p style={{ color: 'white' }}>X</p> : content}
    </div>
  );
}

function Party({ group, isLeader }) {
  console.log(isLeader);
  const [noneDisplay, setNoneDisplay] = useState(0);
  const handleExpelMember = (userId) => {
    if (isLeader) {
      axios.delete(`https://withpet.site/api/v1/groups/${group.partyId}/members/${userId}`, { withCredentials: true })
        .then(() => {
          setNoneDisplay(userId);
        });
    }
  };
  // console.log(group);
  return (
    <>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 20px', marginTop: '30px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px', height: '60px',
      }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>{group.partyName}</h1>
            <div style={{
              display: 'flex', marginLeft: '30px', alignItems: 'center', border: '1px solid rgb(200, 200, 200)', height: '40px', borderRadius: '5px', padding: '0px 10px',
            }}
            >
              <img
                src={group.leaderImg}
                alt="유저 이미지"
                style={{
                  border: '1px solid black', width: '28px', height: '28px', borderRadius: '50%', marginRight: '10px',
                }}
              />
              <p>{group.leaderName}</p>
              <img src={crown} alt="왕관" style={{ width: '20px', height: '20px' }} />

            </div>
          </div>
          { group.userPartyList && group.userPartyList.map((user) => <UserItem key={user.userId} user={user} isLeader={isLeader} handleExpelMember={handleExpelMember} noneDisplay={noneDisplay} />)}
        </div>
        <p>그룹 코드 : {group.partyIsbn}</p>
      </div>
    </>
  );
}

export default Party;
