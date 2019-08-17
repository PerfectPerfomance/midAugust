// window.onload = function (e) {
//
//
// document.body.addEventListener('click', some);
// document.body.addEventListener('click', some1);
//
//     document.body.addEventListener('contextmenu', some);
//  }
//
//  function some(e) {
//      console.log(2);
//  }
//
//  function some1(e) {
//      console.log(1);
//  }
//  // Обработчики событий
// document.querySelector один элемент дом
// document.querySelectorAll массив элементов дом


window.onload = function (e) {
   var buttons = document.querySelectorAll('.actions input');

   for(var i = 0; i < buttons.length; i++){
       buttons[i].onclick = btnClick;
   }
}
function btnClick(e) {
    // for (var k in this){
    //     document.body.innerHTML += '<b>' + k + '</b>' + this[k] + '<br>';
    // }
    var name = this.getAttribute('name');
    if (name === 'save'){
        console.log('1');
    }
    else if(name == 'delete'){
        console.log('2');
    }
}
