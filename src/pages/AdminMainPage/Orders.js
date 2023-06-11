import * as React from 'react';
import { useNavigate } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function Orders({ rows }) {
  const navigate = useNavigate();

  const onClick = (id) => {
    // 지원자 아이디와 함께 지원자 상세정보보기로 이동
    navigate(`./detail/${id}`);
  };

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>지원자 리스트</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>계정</TableCell>
            <TableCell>전화번호</TableCell>
            <TableCell>상태</TableCell>
            {/* <TableCell align="right">자세히 보기</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.applicant_user_id} onClick={() => onClick(row.applicant_user_id)}>
              <TableCell>{row.applicant_user_id}</TableCell>
              <TableCell><img src={row.applicant_user_profileImg} alt="img" style={{ width: '50px', borderRadius: '50%' }} /></TableCell>
              <TableCell>{row.applicant_user_name}</TableCell>
              <TableCell>{row.applicant_user_auth_id}</TableCell>
              <TableCell>{row.applicant_user_phone}</TableCell>
              <TableCell>{row.applicant_status}</TableCell>
              {/* <TableCell align="right">
                <button onClick={() => handleApprove(row)}>승낙</button>
                <button onClick={() => handleCancle(row)}>거절</button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
