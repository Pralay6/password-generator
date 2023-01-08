
function generatePassword(len) {
  // Get the selected checkboxes
  var numbersCheckbox = document.querySelector('input[name=numbers]');
  var lettersCheckbox = document.querySelector('input[name=letters]');
  var symbolsCheckbox = document.querySelector('input[name=symbols]');

  // Set up the characters that can be included in the password
  var numbers = "0123456789";
  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/~`";

  // Create an empty string to store the password
  var password = "";

  // If the numbers checkbox is selected, add a random number to the password
  if (numbersCheckbox.checked) {
    for(let i = 0 ; i<len ; i++){    
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      
    }
  }

  // If the letters checkbox is selected, add a random letter to the password
  if (lettersCheckbox.checked) {
    for(let i = 0 ; i<len ; i++){
    password += letters.charAt(Math.floor(Math.random() * letters.length));
    
    }
  }

  // If the symbols checkbox is selected, add a random symbol to the password
  if (symbolsCheckbox.checked) {
    for(let i = 0 ; i<len ; i++){
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    
  }
  }
  // If no checkboxes were selected, prompt the user to select at least one
  if (password === "") {
    alert("Please select at least one type of character to include in the password.");
  } else {
    
    return password;
 };
}

//for generating random password in the input field.
document.getElementById('btn').addEventListener('click' ,function(){
  document.getElementById('iField').value=generatePassword(8);
});

 //copy text
document.getElementById("copyBtn").addEventListener('click' ,async()=>{
         let text = document.getElementById("iField").value;
         try {
                 await navigator.clipboard.writeText(text);
                 alert(`${text} copied to clipboard`);
               } catch (err) {
                 alert('Failed to copy: ', err);
               }
             } );