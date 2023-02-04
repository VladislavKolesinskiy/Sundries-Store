function getBooks () {

  const myData = (url) => 
    new Promise ((resolve, reject) => 
    fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
  )

  myData('http://localhost:3000/items')
    .then(function (data) {
      
      let itemsList = document.querySelector('#allItems');
      itemsList.innerHTML = '';
        data.forEach((el, ind) => {
        let divItem = document.createElement('div');
        divItem.className = 'itemInfo';
        divItem.innerHTML = el.title + el.image + el.price + el.quantity;
        itemsList.append(divItem);
      })
    })
    .catch(error => console.log(error.message))
  
}