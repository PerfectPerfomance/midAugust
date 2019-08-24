// window.onload = function (e) {
//   var a = ['a', 'b', 'c'];
//
//   for(var i = 0; i < a.length; i++){
//     console.log(a[i]);
//     /*умения массив обойти циклом*/
//   }
//   var b = {
//         russia: 'Mocscow',
//          usa: 'Vashington',
//         knr: 'Pekin'
//   };
//   /*У оъекта нет LENGTH!!!!!!!!!*/
//     console.log(b.knr);
// console.log(b['knr']);
//
// //   for (var key in b){
// //       console.log(key);
// //   }
//     for (var key in b) {
//         console.log(b[key]);
//     }
//     for (var i in a) {
//         console.log(a[i]);
//     }
//         /*у массива есть length_ ppproto_*/
//  }
//                 event
// window.onload = function (e) {
//      var items = document.querySelectorAll('.items .item');

     // for (var i = 0; i < items.length; i++){
     //     items[i].onclick = function () {
     //         if(this.style.border != '1px solid red'){
     //             this.style.border = '1px solid red'
     //         }
     //         else {
     //             this.style.border = 'none';
     //         }
     //     }
     // }
     /*второй пример*/
//     var divPrice = document.querySelector('.value');
//     for (var i = 0; i < items.length; i++){
//         items[i].onclick = function () {
//             this.classList.toggle('item-active');
//             calcPrice();
//         }
//     }
//     function calcPrice() {
//         var price = 0;
//         for (var i = 0; i < items.length; i++){
//             if (items[i].classList.contains('item-active')) {
//
//                 price += parseInt(items[i].getAttribute('data-price'));
//             }
//         }
//         divPrice.innerHTML = price ;
//     }
// }
// ==========================================================================
/*калькулятор суматор*/
window.onload = function (e) {
    var btn = document.querySelector('input[name=calc]');
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    btn.onclick = function () {
        var res = parseInt(inp1.value) + parseInt(inp2.value);
            span.innerHTML = res;
            this.disabled = true;
    }
    // первый вариант топорный
    // inp1.oninput = function () {
    //     btn.disabled = false;
    // }
    // inp2.oninput = function () {
    //     btn.disabled = false;
    // }

     // второй вариант лучше
    inp1.oninput = btnEnabled;
    inp2.oninput = btnEnabled;
    function btnEnabled() {
        btn.disabled = false;
    }

}
