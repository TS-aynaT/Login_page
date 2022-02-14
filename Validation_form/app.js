//Validation Code for Inputs
var email = document.getElementsByClassName('email');
var pass = document.getElementsByClassName('pass')

var email_err = document.getElementsByClassName('email_error');
var pass_err = document.getElementsByClassName('pass_error');

email.addEventListener('textInput',email_verify);
pass.addEventListener('textInput',pass_verify);
// console.log(email);

function validate()
{
    if(email.value.length < 9)
    {
        email.style.border = "1px solid red";
        email_err.style.display = "block";
        email.focus();
        return false;
    }
    if(pass.value.length < 5)
    {
        pass.style.border = "1px solid red";
        pass_err.style.display = "block";
        pass.focus();
        return false;
    }
}

function email_verify()
{
    if(email.value.length < 9)
    {
        email.style.border = "1px solid silver";
        email_err.style.display = "none";
        return true;
    }

}

function pass_verify()
{
    if(pass.value.length < 9)
    {
        pass.style.border = "1px solid silver";
        pass_err.style.display = "none";
        return true;
    }

}