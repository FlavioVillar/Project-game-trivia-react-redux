import getSaveNameScore from './getNameScoreStorage';

const setSaveNameScore = (ranking) => {
  const storage = getSaveNameScore();
  const newStorage = [
    ...storage,
    ranking,
  ];
  localStorage.setItem('ranking', JSON.stringify(newStorage));
};

export default setSaveNameScore;
