
let input =  document.getElementById("screen");

let selectedTask = "";
let selectedOriginal = "";
let numberOne = 0;

function addNumber(number) {

    if (input.value.indexOf('.') === -1 || number !== '.' ) {

        if (input.value === "0"  && number !== '.' || selectedTask.length > 0) {
            input.value = number;
            selectedTask = "";
        } else {
            input.value += number;
        }
    }
}

function  action(task) {
    selectedTask = task;
    selectedOriginal = task;
    numberOne = input.value ;
    let result2 = 0;

     if (selectedOriginal === 'percent') {
        result2 = numberOne / 100
    }  else if (selectedOriginal === 'pm') {
        result2 = numberOne - numberOne * 2
    } else if (selectedOriginal === 'x2') {
         result2 = Math.pow(numberOne, 2)
     } else if ( selectedOriginal === 'root' ) {
         result2 = Math.sqrt(numberOne)
     } else if (selectedOriginal === 'delete') {
         result2 = input.value.slice(0,-1)
     }
    input.value = result2
}

function  cacl() {
    let numberTwo = input.value ;
    let  result = 0;


    if (selectedOriginal === 'add') {
        result = parseFloat(numberOne) + parseFloat(numberTwo)
    } else if (selectedOriginal === 'subtract') {
        result = numberOne - numberTwo
    } else if (selectedOriginal === 'multiply') {
        result =  numberOne * numberTwo
    } else if ( selectedOriginal === 'divide') {
        result = numberOne / numberTwo
    }

    input.value = result
}









function clean()  {
    input.value = '0'
    numberOne = 0 ;
    selectedOriginal = '';
    selectedTask = '';
}

//keyboard taps

document.addEventListener('keydown', function (event){
    if (event.keyCode === 48) {
        addNumber(0)
    } else if (event.keyCode === 49 ) {
        addNumber(1)
    }  else if (event.keyCode === 50) {
        addNumber(2)
    }  else if (event.keyCode === 51 ) {
        addNumber(3)
    } else if (event.keyCode === 52 ) {
        addNumber(4)
    } else if (event.keyCode === 53) {
        addNumber(5)
    } else if (event.keyCode === 54 ) {
        addNumber(6)
    } else if (event.keyCode === 55 ) {
        addNumber(7)
    }  else if (event.keyCode === 56 ) {
        addNumber(8)
    } else if (event.keyCode === 57 ) {
        addNumber(9)
    }  else if (event.keyCode === 27) {
        clean()
    } else if (event.keyCode === 191 ) {
        action('divide')
    }  else if (event.keyCode === 56 ) {
       action('multiply')
    } else if(event.keyCode === 189 ) {
        action('subtract')
    } else if(event.keyCode === 187) {
        action('add')
    } else if(event.keyCode ===  13) {
        cacl()
    } else if (event.keyCode === 8){
        action('delete')
    }


});