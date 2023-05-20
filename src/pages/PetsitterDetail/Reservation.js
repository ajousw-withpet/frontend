import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Options from './Options';
import CheckCalendar from './CheckCalendar';
import AvailableCalendar from './AvailableCalendar';

const Container = styled.div`
  background-color: orange;
  width: 375px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #CAA969;
  margin-top: 30px;
`;

function Reservation({ dogList, data, petsitterId }) {
  const [info, setInfo] = useState({
    startDate: '',
    endDate: '',
    checkinTime: '',
    checkoutTime: '',
    dogId: '',
    optionId: [],
  });
  const [unavailable, setUnavailable] = useState([]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const onChangeOption = (list) => {
    setInfo({
      ...info,
      optionId: list,
    });
  };
  // console.log(data.dogs);
  console.log(data);
  console.log(dogList);
  // 예약 불가능한 날짜 확인
  useEffect(() => {
    axios.get('https://withpet.site/api/v1/reservation?month=2023-05&petsitterId=2', { withCredentials: true })
      .then((res) => {
        console.log(res.data.result);
        setUnavailable(res.data.result);
      });
  }, []);

  const onSubmit = (e) => {
    // 예약 api
    console.log(info);
    e.preventDefault();
    const temp = {
      checkIn: `${info.startDate}T${info.checkinTime}:00:00`,
      checkOut: `${info.endDate}T${info.checkoutTime}:00:00`,
      dogId: info.dogId,
      optionId: info.optionId,
      petsitterId: Number(petsitterId),
    };
    console.log(temp);
    axios.post('https://withpet.site/api/v1/reservation', temp, { withCredentials: true })
      .then((res) => {
        console.log(res.data.result);
      });
  };
  console.log(info);
  const onChangeCalender = (start, end) => {
    if (start && end) {
      setInfo({
        ...info,
        startDate: start.format('YYYY-MM-DD'),
        endDate: end.format('YYYY-MM-DD'),
      });
    }
  };

  return (
    <>
      <Container>
        <div> { /* 예약 정보 입력 */ }
          <Title>체크인 / 체크아웃 날짜</Title>
          <CheckCalendar blockdays={unavailable} onChange={onChangeCalender} />
          <form onSubmit={onSubmit}>
            <div>
              <Title>체크인 / 체크아웃 시간</Title>
              <TextField sx={{ m: 1 }} select label="체크인 시간" variant="outlined" name="checkinTime" style={{ width: '138px', height: '40px' }} onChange={onChange} value={info.checkinTime} required>
                <MenuItem value="00">오전 12:00</MenuItem>
                <MenuItem value="01">오전 01:00</MenuItem>
                <MenuItem value="02">오전 02:00</MenuItem>
                <MenuItem value="03">오전 03:00</MenuItem>
                <MenuItem value="04">오전 04:00</MenuItem>
                <MenuItem value="05">오전 05:00</MenuItem>
                <MenuItem value="06">오전 06:00</MenuItem>
                <MenuItem value="07">오전 07:00</MenuItem>
                <MenuItem value="08">오전 08:00</MenuItem>
                <MenuItem value="09">오전 09:00</MenuItem>
                <MenuItem value="10">오전 10:00</MenuItem>
                <MenuItem value="11">오전 11:00</MenuItem>

                <MenuItem value="12">오후 12:00</MenuItem>
                <MenuItem value="13">오후 01:00</MenuItem>
                <MenuItem value="14">오후 02:00</MenuItem>
                <MenuItem value="15">오후 03:00</MenuItem>
                <MenuItem value="16">오후 04:00</MenuItem>
                <MenuItem value="17">오후 05:00</MenuItem>
                <MenuItem value="18">오후 06:00</MenuItem>
                <MenuItem value="19">오후 07:00</MenuItem>
                <MenuItem value="20">오후 08:00</MenuItem>
                <MenuItem value="21">오후 09:00</MenuItem>
                <MenuItem value="22">오후 10:00</MenuItem>
                <MenuItem value="23">오후 11:00</MenuItem>
              </TextField>
              <TextField sx={{ m: 1 }} select label="체크아웃 시간" variant="outlined" name="checkoutTime" style={{ width: '138px', height: '40px' }} onChange={onChange} value={info.checkoutTime} required>
                <MenuItem value="00">오전 12:00</MenuItem>
                <MenuItem value="01">오전 01:00</MenuItem>
                <MenuItem value="02">오전 02:00</MenuItem>
                <MenuItem value="03">오전 03:00</MenuItem>
                <MenuItem value="04">오전 04:00</MenuItem>
                <MenuItem value="05">오전 05:00</MenuItem>
                <MenuItem value="06">오전 06:00</MenuItem>
                <MenuItem value="07">오전 07:00</MenuItem>
                <MenuItem value="08">오전 08:00</MenuItem>
                <MenuItem value="09">오전 09:00</MenuItem>
                <MenuItem value="10">오전 10:00</MenuItem>
                <MenuItem value="11">오전 11:00</MenuItem>

                <MenuItem value="12">오후 12:00</MenuItem>
                <MenuItem value="13">오후 01:00</MenuItem>
                <MenuItem value="14">오후 02:00</MenuItem>
                <MenuItem value="15">오후 03:00</MenuItem>
                <MenuItem value="16">오후 04:00</MenuItem>
                <MenuItem value="17">오후 05:00</MenuItem>
                <MenuItem value="18">오후 06:00</MenuItem>
                <MenuItem value="19">오후 07:00</MenuItem>
                <MenuItem value="20">오후 08:00</MenuItem>
                <MenuItem value="21">오후 09:00</MenuItem>
                <MenuItem value="22">오후 10:00</MenuItem>
                <MenuItem value="23">오후 11:00</MenuItem>
              </TextField>
              <Title>반려동물 선택</Title>
              <TextField sx={{ m: 1 }} select label="반려견 선택" variant="outlined" name="dogId" style={{ width: '300px' }} onChange={onChange} value={info.dogId} required>
                {/* <MenuItem value="23">오후 11:00</MenuItem> */}
                { dogList.map((dog) => <MenuItem key={dog.dogId} value={dog.dogId} disabled={!dog.petReservationAvailable}>{dog.name}</MenuItem>)}
              </TextField>
              <Title>옵션 선택</Title>
              {/* 여기 서비스 넘겨줌 */}
              <Options services={data.petSitterServices} onChange={onChangeOption} />
            </div>
            <input
              type="submit"
              value="예약 하기"
              style={{
                width: '285px', height: '50px', margin: 'auto', borderRadius: '10px', backgroundColor: '#CAA969', color: 'white',
              }}
            />
          </form>
        </div>
        <div>
          <Title>이용 요금(데이케어)</Title>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            { data.petSitterCriticalServices && data.petSitterCriticalServices.map((item) => (
              <div key={item.petSitterServiceId} style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <img src={item.serviceImg} alt="서비스 이미지" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                </div>
                <p>{item.serviceName} / {item.serviceIntroduction} / {item.price}원</p>
              </div>
            ))}
          </div>
        </div>
        <AvailableCalendar unavailable={unavailable} />
      </Container>
    </>
  );
}

export default Reservation;
