function printDom(data) {
    
    const oldResult = document.querySelector('div#result');
    if (oldResult) {
      oldResult.remove();
    }
  
    
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.appendChild(resultDiv);
  
    
    const shops = data.results.shop;
  
    for (let shop of shops) {
      const nameElem = document.createElement('h2');
      nameElem.textContent = shop.name;
  
      const addressElem = document.createElement('p');
      addressElem.textContent = `住所：${shop.address}`;
  
      const imgElem = document.createElement('img');
      imgElem.src = shop.photo.pc.l;
      imgElem.alt = shop.name;
      imgElem.width = 400;
  
      
      resultDiv.appendChild(nameElem);
      resultDiv.appendChild(addressElem);
      resultDiv.appendChild(imgElem);
    }
  }
  