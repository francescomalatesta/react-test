const readFromLocalStorage = () => {
  return (localStorage.getItem('items') === null) ? [] : JSON.parse(localStorage.getItem('items'));
};

export default readFromLocalStorage;
