const getTodos = (callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {

    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4){
      callback('could not fetch the data', undefined);
    }

  });
  //we could get here the json file that we made:
  request.open('GET', 'todos.json');
  request.send();

};

getTodos((err, data) => {
  console.log('callback function fired');
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});