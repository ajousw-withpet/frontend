import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Sidebar = styled.div`
  display: flex;
  position: relative;
  // background-color: red;
  width: 300px;
  border-radius: 5px;
  margin: 20px 40px 50px 10px;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 10px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;

const RoomWrapper = styled.div`
  display: flex;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  align-items: center;
`;

function RoomItem({ room, userId }) {
  console.log(room);
  const navigate = useNavigate();
  return (
    <RoomWrapper onClick={() => navigate(`../chat?userId=${userId}&roomId=${room.chatRoomId}`)}>
      {/* <img src={room.otherProfileImg} alt="상대방 프로필 사진" /> */}
      <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src="https://withpetoriginimage.s3.ap-northeast-1.amazonaws.com/02f71a84-7269-4319-8840-7a8a3fe9ea25.jpg" alt="상대방 프로필 사진" />
      <p>{room.otherName}</p>
      <p style={{ fontSize: '10px' }}>{room.recentMessageTime}</p>
      <p>{room.notReceivedCount}</p>
    </RoomWrapper>
  );
}

function ChatSidebar({ roomList, userId }) {
  return (
    <Sidebar>
      <p>사이드바</p>
      { roomList.map((room) => (
        <RoomItem key={room.chatRoomId} room={room} userId={userId} />
      ))}
    </Sidebar>
  );
}

export default ChatSidebar;
