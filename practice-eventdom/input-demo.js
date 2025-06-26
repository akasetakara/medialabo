//b = document.querySelector('button#print');
//b.addEventListener('click', greeting);

//function greeting() {
    //console.log('こんにちは');
//}

b = document.querySelector('button#print');
b.addEventListener('click', greeting);

function greeting() {
    let i = document.querySelector('input[name="shimei"]');  
    let shimei = i.value;
    let aisatsu = "こんにちは，" + shimei + "さん";
    let p = document.querySelector('#message');
    p.textContent = aisatsu;
}

