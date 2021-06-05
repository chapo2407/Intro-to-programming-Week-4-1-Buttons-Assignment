function checkCreds() {
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("LName").value;
    var fullName = firstName + " " + lastName;
    var badgeNmb = document.getElementById("badgeID").value;

    //validate fullname
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginstatus").innerHTML = "Invalid Full Name, Please Re-submit";
    } else if(badgeNmb > 999 || badgeNmb < 1){
        document.getElementById("loginstatus").innerHTML = "Invalid Badge Number, Please Re-submit";
    }
    else {
        console.log("submission passes!");
        alert("Access granted! Welcome, " + fullName);
        location.replace("UATSpace.html");
    }


}