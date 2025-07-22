// 課題6-1 のイベントハンドラ登録処理
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#search').addEventListener('click', sendRequest);
});

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const genreCode = document.querySelector('#genre').value;
  console.log("検索キー: ", genreCode);

  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genreCode}.json`;

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
}

// 課題6-1: 通信が成功した時の処理
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  print(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  const shops = data.results.shop;
  for (let i = 0; i < shops.length; i++) {
      const shop = shops[i];
      console.log("店舗名：" + shop.name);
      console.log("住所：" + shop.address);
      console.log("予算：" + shop.budget.name);
      console.log("キャッチコピー：" + shop.catch);
      console.log("ジャンル：" + shop.genre.name);
      console.log("営業時間：" + shop.open);
      console.log("アクセス：" + shop.access);
      console.log("最寄駅：" + shop.station_name);
      console.log("-------------");
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const shops = data.results.shop;
  const resultArea = document.querySelector('#result');
  resultArea.innerHTML = ''; // 前回結果を消す

  for (let i = 0; i < shops.length; i++) {
      const shop = shops[i];
      const div = document.createElement('div');
      div.innerHTML = `
          <h3>店舗名：${shop.name}</h3>
          <p>住所：${shop.address}</p>
          <p>予算：${shop.budget.name}</p>
          <p>キャッチコピー：${shop.catch}</p>
          <p>ジャンル：${shop.genre.name}</p>
          <p>営業時間：${shop.open}</p>
          <p>アクセス：${shop.access}</p>
          <p>最寄駅：${shop.station_name}</p>
          <hr>
      `;
      resultArea.appendChild(div);
  }
}



