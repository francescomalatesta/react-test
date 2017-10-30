const writeToLocalStorage = (itemsData) => {
  localStorage.setItem('items', JSON.stringify(itemsData));
};

export default writeToLocalStorage;
