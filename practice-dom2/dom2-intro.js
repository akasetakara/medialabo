function changeDom() {
    
    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);
  
    
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');
  
    
    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);
  
    
    let l2 = document.querySelector('li#mochi');
    if (l2) l2.remove();
  
    
    let u2 = document.querySelector('ul#kassen');
    if (u2) u2.remove();
  
    
    let u3 = document.createElement('ul');
    let colors = ['赤', '緑', '青'];
    for (let color of colors) {
      let li = document.createElement('li');
      li.textContent = color;
      u3.insertAdjacentElement('beforeend', li);
    }
  
    let p2 = document.querySelector('p#primary');
    p2.insertAdjacentElement('afterend', u3);
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button#henkou').addEventListener('click', changeDom);
  });
  