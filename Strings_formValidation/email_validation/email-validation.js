function validateEmail(emailID) {
    if(emailID==""|| emailID.indexOf("@")==-1){
        alert("InValid address!");
       return false;
    }
    else{
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
 }