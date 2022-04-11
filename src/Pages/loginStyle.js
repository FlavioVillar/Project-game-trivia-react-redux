import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid red; */
  /* width: 50%; */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  /* background-image: linear-gradient(-269.2136537809503deg,
   rgba(255, 214, 255,1) -0.5602838943586903%,
   rgba(182, 143, 218,1) 35.59765122599565%,
   rgba(152, 114, 204,1) 49.94449947750355%,
   rgba(147, 144, 217,1) 66.03623467851915%,
   rgba(139, 197, 239,1) 92.50035341271953%,
   rgba(139, 198, 240,1) 92.50035341271953%); */

   background: linear-gradient(111.98606494905152deg,
     rgba(217, 108, 108,1) 4.1954039715274085%,
     rgba(173, 89, 159,1) 15.5514823584686%,
     rgba(129, 70, 212,1) 27.76642381669106%,
     rgba(64, 175, 245,1) 95.80746490819584%);
  
  /* background-size: 100vw; */
  height: 100vh;
  width: 100vw;
  /* margin-left: 50px; */
`;

export const Container2 = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 650px;

  background-color: #f0f0f0;
  border-radius: 0 0 8px 8px;
  /* align-items: center; */
  box-shadow: 26px 32px 19px -8px rgba(0,0,0,0.1);

  padding: 10px;
  justify-content: center;

`;

const glitch = keyframes`
  0% {
    color: #ab83d4;
    filter: hue-rotate(0deg);
  }
  10%{
    background-position: 5px 0;
  }
  20%{
    background-position: -5px 0;
  }
  30%{
    background-position: 15px 0;
  }
  40%{
    background-position: 5px 0;
  }
  50%{
    background-position: -25px 0;
  }
  60%{
    background-position: -50px 0;
  }
  70%{
    background-position: 0 -20px;
  }
  80%{
    background-position: -60px -20px;
  }
  81%{
    background-position: 0 0;
  }
  100%{
    color: #ab83d4;
    filter: hue-rotate(360deg);
  }

`;

export const Trivia = styled.h1`
font-family: 'Rubik Wet Paint';
text-align: center;
/* border: 1px solid red; */
  /* font-size: 100px; */
font-size: 85px;
padding: 20px;
width: 650px;

border-radius: 8px 8px 0 0;

/* transform: rotate(-15deg); */

background: linear-gradient(111.98606494905152deg,
     rgba(217, 108, 108,1) 4.1954039715274085%,
     rgba(173, 89, 159,1) 15.5514823584686%,
     rgba(129, 70, 212,1) 27.76642381669106%,
     rgba(64, 175, 245,1) 95.80746490819584%);


  color: #e3e3e3;
  /* text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
  -0.025em 0 0 rgba(0, 255, 0, 0.75),
  0.025em 0.05em 0 rgba(0, 0, 255, 0.75), */
  ;

  /* animation: ${glitch} .2s linear infinite; */


`;

export const Tittle = styled.h1`
text-align: center;
  font-size: 40px;
  color: linear-gradient(92.24079276884686deg,
     rgba(204, 88, 165,1) 3.931965972591804%,
     rgba(152, 114, 204,1) 42.35070131635843%,
     rgba(135, 90, 174,1) 55.254704027241885%,
     rgba(82, 16, 82,1) 97.77925841538051%);
  /* #3c3b3d; */
  
  /* margin-left: 73px;
  margin-bottom: 5px; */
  /* text-align: center; */

`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 8px;
  border: 1px solid #3c3b3d;
  font-size: 15px;

  padding: 10px;
  width: 250px;
  outline: none;
`;

export const Button = styled.button`
  margin: 5px;
  border-radius: 8px;
  border: 1px solid #3c3b3d;
  color: #3c3b3d;
  -webkit-text-stroke: 0.2px;
  
  padding: 8px;
  width: 122px;

  background-color: #e3e3e3;

  &:hover {
    background-color: #d3d2d4;
    
    cursor: pointer;
  }
`;

export const Container3 = styled.div`
  /* border: 1px solid red; */
  font-family: 'Dongle', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  /* background-color: #e3e3e3; */
  /* max-width: 500px; */
`;
