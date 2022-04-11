import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(111.98606494905152deg,
     rgba(217, 108, 108,1) 4.1954039715274085%,
     rgba(173, 89, 159,1) 15.5514823584686%,
     rgba(129, 70, 212,1) 27.76642381669106%,
     rgba(64, 175, 245,1) 95.80746490819584%);

  height: 100vh;
  width: 100vw;
  /* position: fixed; */
`;

export const Container4 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  flex-direction: column;
  width: 500px;

  align-items: center;
  min-height: 250px;

  padding: 10px;
  background-color: #e3e3e3;

`;

export const ContainerQuestion = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3e3e3;
  width: 500px;
`;

export const ContainerButton = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  background-color: #e3e3e3;
  width: 500px;
`;

export const ButtonQuestions = styled.div`
  /* border: 1px solid red; */
  font-family: 'Dongle';
  border-radius: 20px;
  border: 1px solid #3c3b3d;
  color: #3c3b3d;
  font-size: 25px;
  
  margin: 10px;
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

export const Category = styled.h3`
display: flex;
justify-content: center;
font-size: 35px;
font-family: 'Dongle', sans-serif;
color: #3c3b3d;
text-align: center;
`;

export const Question = styled.h3`
display: flex;
justify-content: center;
font-size: 35px;
padding: 10px;
font-family: 'Dongle', sans-serif;
color: #3c3b3d;
text-align: center;
`;

export const TimerContainer = styled.div`
    /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3e3e3;
  width: 500px;
`;

export const TimerPlacar = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-family: 'Dongle', sans-serif;
  padding: 5px;

  color: #3c3b3d;
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

export const NameUser = styled.h3`
display: flex;
justify-content: center;
font-size: 35px;
font-family: 'Dongle', sans-serif;
color: white;
text-align: center;
`;

export const ButtonNext = styled.button`
  border-radius: 8px;
  border: 1px solid #3c3b3d;
  color: #3c3b3d;
  font-family: sans-serif;
  
  padding: 5px;
  width: 100px;
  height: 35px;
  text-align: center;
  background-color: #e3e3e3;

  &:hover {
    background-color: #d3d2d4;
  
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid #3c3b3d;
  justify-content: center;
`;

export const HeaderAlign = styled.header`
    /* border: 1px solid red; */
    display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
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
