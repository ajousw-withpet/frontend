import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Service from './Service';
import dogimgdefault from '../../assets/dogProfileImage.png';

export default function Orders({
  listName, list, data, onChange, onDelete, onSubmitModify, onSubmit,
}) {
  // const nextId = useRef(5);
  // const [list, setList] = useState([]);
  // const [data, setData] = useState({
  //   // id: '',
  //   serviceName: '',
  //   serviceImg: '',
  //   serviceIntroduction: '',
  // });

  // console.log(list);
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>서비스 리스트</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>아이콘</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>설명</TableCell>
            <TableCell>승낙 여부</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <Service key={row.serviceId} item={row} listName={listName} onModify={onSubmitModify} onDelete={onDelete} />
          ))}
          <TableRow style={{ height: '50px' }}>
            <TableCell>5</TableCell>
            <TableCell>
              <img id="preview-image" alt="이미지 미리보기" src={!data.serviceImg ? dogimgdefault : data.serviceImg} />
              <label htmlFor="image-select">프로필 이미지 선택</label>
              <input type="file" accept="image/*" id="image-select" style={{ display: 'none' }} onChange={onChange} />
            </TableCell>
            <TableCell>
              <TextField sx={{ m: 1 }} label="이름" variant="outlined" name="serviceName" onChange={onChange} value={data.serviceName} required />
            </TableCell>
            <TableCell>
              <TextField sx={{ m: 1 }} label="설명" variant="outlined" name="serviceIntroduction" onChange={onChange} value={data.serviceIntroduction} required />
            </TableCell>
            <TableCell>
              <button onClick={(e) => onSubmit(e, listName)}>추가</button>
              <button>취소</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
