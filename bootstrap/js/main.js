function login() {
    var user, psword;

    user = document.getElementById("name").value.length;
    psword = document.getElementById("password").value.length;

    if (user === 0 || psword === 0){

        alert("You can't leave fields empty!!");
        return false;

    }

    else if(psword < 8 || psword > 16){

        alert("Invalid password!");
        return false;
    }

    else{

        return true;
    }
}

function index_validation(){

    var username,pass;
    username = document.getElementById("name").value.length;
    pass = document.getElementById("password").value.length;

    if (username === 0 || pass === 0){

        alert("you can't login without filling the fields!");
        return false;
    }

    if (pass < 8 || pass > 16) {

        alert("Password must be at least 8 at most 16 characters!");
        return false;
    }

    else {

        location.href = 'login.html';
        return true;

    }

}

function validation() {
    var username, pass, tel, email;

    username= document.getElementById("name").value.length;
    pass= document.getElementById("password").value.length;
    tel= document.getElementById("telnum").value.length;
    email = document.getElementById("email").value.length;

    if (username === 0 || pass === 0 || tel === 0 || email === 0) {

        alert("You can't leave empty these boxes!");
        return false;
    }

    if (pass < 8 || pass > 16) {
        alert("Password must be at least 8 at most 16 characters!");
        return false;
    }

    if (tel > 11) {
        alert("Phone number must be 11 digits long!");
        return false;
    }

    else {
        alert("Registered successfully!");
        location.href = 'response.html';
        return true;

    }
}

function form_control() {
    if(document.getElementById("name").value.length === 0)
        document.getElementById("submit").disabled = true;
    else if(document.getElementById("password").value.length === 0)
        document.getElementById("submit").disabled = true;
    else if(document.getElementById("email").value.length === 0)
        document.getElementById("submit").disabled = true;
    else if(document.getElementById("textA").value.length === 0)
        document.getElementById("submit").disabled = true;
    else
        document.getElementById("submit").disabled = false;
}

function validEmail(form)
{
    var email = form.email.value;
    var ba = email.indexOf("@");
    var aa = email.lastIndexOf(".");
    if ( ba < 1 || aa < ba + 2 || aa + 2 >= email.length )
    {
        alert("Please enter a valid E-mail address!");
        return false;
    }
    else
    {
        alert("Valid E-mail address.");
        return true;
    }
}

function nameValidation(evt){

    var charCode = (evt.which) ? evt.which : event.keyCode;

    if ((charCode <= 93 && charCode >= 65) || (charCode <= 122 && charCode >=97) || (charCode === 8) || (charCode === 350)
        || (charCode === 351) || (charCode === 304) || (charCode === 286) || (charCode === 287) || (charCode === 231) || (charCode === 199)
        || (charCode === 305) || (charCode === 214) || (charCode === 246) || (charCode === 220) || (charCode === 252) || (charCode === 32)) {

        return true;

    }

    else{

        alert("You can't type anything but alphabet letters in this area!!");
        return false;
    }
}

function numberValidation(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode;
    if(document.getElementById("telnum").value.length <= 11) {

        if (charCode > 31 && (charCode < 48 || charCode > 57)) {

            alert("You can't type anything but numbers in this area!!");
            return false;
        }
        else {

            return true;
        }
        return true;
    }
    else {

        alert("Telephone number must be 11 digits long!");
        return false;
    }
}

function validPassword(inputtxt) {

        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
        if(inputtxt.value.match(decimal)) {

            alert("Valid password...")
            return true;
        }
        else {

            alert("Password invalid!! Must contain at least one uppercase, one lowercase letter, one number and one special character!! ");
            return false;
        }
}



