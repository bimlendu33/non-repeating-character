// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var str = 'cbcbdde';
var strArr = str.split('');

function noRepeatChar(){
  console.log(strArr)
  strArr.forEach((item, indx, srcArr)=>{
    if(srcArr.indexOf(item) == srcArr.lastIndexOf(item) ){
      console.log(item)
    }
  })
}

noRepeatChar();
