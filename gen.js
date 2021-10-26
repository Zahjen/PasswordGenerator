const userValue = document.querySelector("#userNumber");
const generatePassword = document.querySelector(".genPwd");
const checkBox = document.querySelectorAll(".choice");
const password = document.querySelector(".password");

let arrayChoice = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "&", "é" , "~" , "\"" , "#" , "\'" , "{" , "(" , "[" , "-" , "|" , "è" , "`" , "_" , "\\" , "ç" , "^" , "à" , "@" , ")" , "]" , "°" , "=" , "}" , "+" , "/" , "*" , "," , "?" , ";" , "." , ":" , "§" , "!" , "$" , "£" , "ù" , "%" , "<" , ">"];

function genPwd() {
    let size = (userValue.value > 0) ? parseInt(userValue.value, 10) : alert("Please enter a strictly positive number");
    
    let uppercase = checkBox[0].checked;
    let lowercase = checkBox[1].checked;
    let number = checkBox[2].checked;
    let symbol = checkBox[3].checked;

    let passwordGen = "";
    
    while (passwordGen.length < size) {

        rand = Math.floor(Math.random() * 102);

        if ((rand >= 0 && rand <= 9) && number === true) {
            passwordGen += arrayChoice[rand];
        }
        else if ((rand >= 10 && rand <= 35) && lowercase === true) {
            passwordGen += arrayChoice[rand];
        }
        else if ((rand >= 36 && rand <= 61) && uppercase === true) {
            passwordGen += arrayChoice[rand];
        }
        else if ((rand >= 62 && rand <=101) && symbol === true) {
            passwordGen += arrayChoice[rand];
        }
        else if (number === false && lowercase === false && uppercase === false && symbol === false) {
            passwordGen += arrayChoice[rand];
        }
    }

    password.innerHTML = passwordGen;
}

generatePassword.addEventListener('click', genPwd);