const getSaveNameScore = () => JSON.parse(localStorage.getItem('ranking')) || [];

export default getSaveNameScore;
