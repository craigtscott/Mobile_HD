export const fetchAllLists = () => {
  return fetch(`http://localhost:3000/api/lists`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
