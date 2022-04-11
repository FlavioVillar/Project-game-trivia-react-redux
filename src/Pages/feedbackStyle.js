import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;

  background: linear-gradient(111.98606494905152deg,
     rgba(217, 108, 108,1) 4.1954039715274085%,
     rgba(173, 89, 159,1) 15.5514823584686%,
     rgba(129, 70, 212,1) 27.76642381669106%,
     rgba(64, 175, 245,1) 95.80746490819584%);

  height: 100vh;
  width: 100vw;
`;

export const Container2 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  width: 500px;
  align-items: center;

  padding: 10px;
  justify-content: center;
  background: linear-gradient(111.98606494905152deg,
     rgba(217, 108, 108,1) 4.1954039715274085%,
     rgba(173, 89, 159,1) 15.5514823584686%,
     rgba(129, 70, 212,1) 27.76642381669106%,
     rgba(64, 175, 245,1) 95.80746490819584%);

     border-radius: 8px 8px 0 0;

`;

export const Container3 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  width: 500px;
  align-items: center;

  padding: 10px;
  height: 400px;
  justify-content: space-between;
  background-color: #e3e3e3;
  border-radius: 0 0 8px 8px;

`;

export const Avatar = styled.img`
  /* position: fixed; */
  border-radius: 50%;
  border: 1px solid #3c3b3d;
  align-items: center;
  justify-content: center;
`;

export const NameUser = styled.h3`
display: flex;
justify-content: center;
font-size: 35px;
font-family: 'Dongle', sans-serif;
color: white;
text-align: center;
`;

export const Score = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-family: 'Dongle', sans-serif;
  padding: 5px;

  color: white;
  text-align: center;
`;

export const Score2 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-family: 'Dongle', sans-serif;
  padding: 5px;

  color: #3c3b3d;
  text-align: center;
`;

export const Message = styled.h3`
display: flex;
justify-content: center;
font-size: 35px;
font-family: 'Dongle', sans-serif;
color: #3c3b3d;
text-align: center;
`;

export const Buttons = styled.div`
  font-family: 'Dongle';
  margin: 10px 20px;
  border-radius: 20px;
  border: 1px solid #3c3b3d;
  color: #3c3b3d;
  font-size: 25px;
  
  padding: 5px;
  width: 250px;
  text-align: center;
  align-items: center;

  background-color: #e3e3e3;

  &:hover {
    background-color: #d3d2d4;
    cursor: pointer;
  }
`;
