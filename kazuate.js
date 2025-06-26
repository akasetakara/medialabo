let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

document.querySelector('#print').addEventListener('click', hantei);

function hantei() {
  
  let input = document.querySelector('#yoso');
  let yoso = parseInt(input.value);

  
  kaisu++;
  document.querySelector('#kaisu').textContent = kaisu;
  document.querySelector('#answer').textContent = yoso;

  
  let result = document.querySelector('#result');

  if (kaisu >= 4) {
    result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  } else if (yoso === kotae) {
    result.textContent = '正解です．おめでとう!';
  } else {
    if (kaisu === 3) {
      result.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
    } else if (yoso < kotae) {
      result.textContent = 'まちがい．答えはもっと大きいですよ';
    } else {
      result.textContent = 'まちがい．答えはもっと小さいですよ';
    }
  }
}
