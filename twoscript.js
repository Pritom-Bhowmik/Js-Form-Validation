// Form Validation 
userName = document.querySelector('#userName');
Email = document.querySelector('#email');
password = document.querySelector('#password');
confirmPassword = document.querySelector('#confirmPassword');
form = document.querySelector('#form');


// Show Error Function 
function ShowError(input, message){
    let FormControl = input.parentElement;
    FormControl.className = 'form-control error';
    let small = FormControl.querySelector('small');
    small.innerHTML = message;
    small.style.visibility = 'visible';
    small.style.color = '#e74c3c';
}


// Show Success Function 
function ShowSuccess(input, message){
    let FormControl = input.parentElement;
    FormControl.className = 'form-control success';
    let small = FormControl.querySelector('small');
    small.innerHTML = message;
    small.style.visibility = 'visible';
    small.style.color = '#2ecc71';
}

// checkLength Function 
function CheckLength(input, min, max){
    if(input.value === ""){
        ShowError(input,'Please fill the field..');
    }else if(input.value.length < min){
        ShowError(input, 'You Need To Enter Minimum '+min+' Character..');
    }else if(input.value.length > max){
        ShowError(input, 'You Need To Enter Maximum '+max+' Character..');
    }else{
        ShowSuccess(input, "You have entered correct length.");
    }
}

// checkMail function 
function checkMail(input){
    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(input.value === ""){
        ShowError(input,'Please fill the field..');
    }else if(regEx.test(input.value) === false){
        ShowError(input,'You have entered a invalid mail..');
    }else{
        ShowSuccess(input, 'You have entered a correct mail !!');
    }
}

// checkPassword fucntion 
function checkPassword(input1, input2){
    if(input1.value === ""){
        ShowError(input1,'Please fill the field..');
    }else if(input1.value !== input2.value){
        ShowError(input2,'Password dose not match..');        
    }else{
        ShowSuccess(input2,"Password matched !!");
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    CheckLength(userName, 3, 15);
    CheckLength(password, 6, 12);
    checkMail(Email);
    checkPassword(password, confirmPassword);
})