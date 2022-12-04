
let numberFi = prompt('акажон чан бор кунам');
function fibonacci(number) {
    let a = 0
    let b = 1

    for (let i = 3; i <= number; i++) {
        let c = a + b;
            a = b; 
            b = c;
    }

    return b
}

alert(fibonacci(numberFi))


function email(emailKreated) {

}


function randomId(yourId){
    let text = "";
    let generator = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (let i = 0; i < yourId; i++)
      text += generator.charAt(Math.floor(Math.random() * generator.length ));
   return text;
  }
  
 alert('Айдетон '+randomId(10))