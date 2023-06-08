function display  (data){
  document.getElementById("screen").value += data;
  return data;
}

function solve(){

    let  screen =  document.getElementById('screen').value;
    let data = screen.value;
    let result  =  eval(data);
    screen.value = result;
    return result ;
}

function  clear() {
  let screnn = documentgetElementById('screen');
}