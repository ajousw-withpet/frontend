import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
display: flex;
position: relative;
width: 256px;
border-radius: 5px;
margin-top: 30px;
margin-left: 40px;
margin-bottom: 50px;
flex-direction: column;
align-items: center;
padding: 10px 0px 10px 10px;
margin-bottom: 20px;

box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;
function PetsitterInfoModifySidebar() {
  return (
    <Sidebar>
      <Button>집사진</Button>
      <Button>해시태그</Button>
      <Button>소개글</Button>
      <Button>자격증</Button>
      <Button>이용가능서비스</Button>
      <Button>필수서비스</Button>

    </Sidebar>
  );
}

export default PetsitterInfoModifySidebar;
