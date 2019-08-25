window.onload = function (e) {
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    // первый пример
//     document.querySelector('input[name=sum]').onclick = function () {
//         var res = parseInt(inp1.value) + parseInt(inp2.value);
//         span.innerHTML = res;
//     }
//         document.querySelector('input[name=min]').onclick = function () {
//         var res = parseInt(inp1.value) - parseInt(inp2.value);
//         span.innerHTML = res;
//     }
//
// }
    var buttons = document.querySelectorAll('input[type=button]');
    
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = function () {
            var op = this.getAttribute('data-op');
            calcForm(op);
        }
    }

        function calcForm(op) {
            var a = parseInt(inp1.value);
            var b = parseInt(inp2.value);
            var res;

            if (op === '+'){
            res = a + b;
            }
            else if (op === '-'){
                res = a - b;
            }
            else if (op === '*'){
                res = a * b;
            }
            else if (op === '/'){
                res = a / b;
            }
            else {
                res = 'странная операция';
            }
            span.innerHTML = res;
        }

        }