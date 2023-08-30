function validateEmail1(emailID) {
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("InValid address!");
       return false;
    }
    else{
        alert("valid address!");
        return true;

    }
 }