import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pet from './Pet';
import './Pets.css';
import PetAdd from './PetAdd';
import dogimgdefault from '../../assets/dogProfileImage.png';

function PetList() {
  const [pets, setPets] = useState([]);

  const [petInfo, setPetInfo] = useState({
    dog_name: '',
    dog_breed: '',
    dog_birth: '',
    dog_gender: '',
    neutralization: '',
    dog_weight: '',
    dog_img: '',
    dog_isbn: '',
  });
  // const nextId = useRef(3);

  const onChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPetInfo({
          ...petInfo,
          dog_img: reader.result,
        });
      };
    } else {
      const { value, name } = e.target;
      setPetInfo({
        ...petInfo,
        [name]: value,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let img = petInfo.dog_img;
    if (img === '') {
      img = dogimgdefault;
    }
    const pet = {
      // dog_id: nextId.current,
      dog_name: petInfo.dog_name,
      dog_breed: petInfo.dog_breed,
      dog_birth: petInfo.dog_birth,
      dog_gender: petInfo.dog_gender,
      neutralization: petInfo.neutralization,
      dog_weight: petInfo.dog_weight,
      dog_img: img,
      dog_isbn: petInfo.dog_isbn,
    };
    setPets(pets.concat(pet));
    // nextId.current += 1;
    axios.post('http://ec2-3-39-193-176.ap-northeast-2.compute.amazonaws.com:8080/api/v1/dogs/register-dog', pet)
      .then(() => {
      })
      .catch(() => {
      });
    setPetInfo({
      // dog_id: '',
      dog_name: '',
      dog_breed: '',
      dog_birth: '',
      dog_gender: '',
      neutralization: '',
      dog_weight: '',
      dog_img: '',
      dog_isbn: '',
    });
  };

  useEffect(() => {
    axios.get('http://ec2-3-39-193-176.ap-northeast-2.compute.amazonaws.com:8080/api/v1/dogs')
      .then((res) => {
        setPets(res.data.result);
      })
      .catch(() => {
      });
  }, []);

  const onSubmitModify = (id, modifyPetInfo) => {
    // setPets(pets.map((pet) => (pet.id === id ? modifyPetInfo : pet)));
    axios.put(`http://ec2-3-39-193-176.ap-northeast-2.compute.amazonaws.com:8080/api/v1/dogs/${id}`, modifyPetInfo)
      .then(() => {
      })
      .catch(() => {
      });
  };

  return (
    <>
      <div className="list_container">
        {pets.map((pet) => {
          return <Pet pet={pet} key={pet.dog_id} onSubmitModify={onSubmitModify} />;
        })}
        <PetAdd onSubmit={onSubmit} onChange={onChange} petInfo={petInfo} />
      </div>
    </>
  );
}

export default PetList;
