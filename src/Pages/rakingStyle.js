import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid red; */
  /* width: 50%; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* flex-wrap: wrap; */

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
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  width: 500px;

  box-shadow: 26px 32px 19px -8px rgba(0,0,0,0.1);

  padding: 20px;
  background: linear-gradient(111.98606494905152deg,
     rgba(217, 108, 108,1) 4.1954039715274085%,
     rgba(173, 89, 159,1) 15.5514823584686%,
     rgba(129, 70, 212,1) 27.76642381669106%,
     rgba(64, 175, 245,1) 95.80746490819584%);

     border-radius: 8px 8px 8px 8px;
`;

export const Container3 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  padding: 10px;
  /* background: linear-gradient(212.2242535429137deg,
     rgba(101, 101, 163,1) 55.723852040816325%,
     rgba(133, 94, 167,1) 62.64604591836735%,
     rgba(204, 82, 177,1) 76.83227040816327%,
     rgba(204, 82, 164,1) 77.77232142857143%,
     rgba(212, 89, 61,1) 83.92538265306122%); */

     border-radius: 8px 8px 0px 0px;

`;

export const Container4 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankingTitle = styled.h1`
display: flex;
justify-content: center;
font-size: 55px;
font-family: 'Dongle', sans-serif;
color: white;
text-align: center;
`;

export const Avatar = styled.img`
  /* position: fixed; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 50%;
  border: 1px solid #3c3b3d;
`;

export const NamePlayer = styled.h3`
display: flex;
justify-content: center;
text-align: center;
font-size: 35px;
font-family: 'Dongle', sans-serif;
color: white;
`;

export const Score = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-family: 'Dongle';
  padding: 5px;

  color: white;
  text-align: center;
`;

export const Button = styled.div`
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
