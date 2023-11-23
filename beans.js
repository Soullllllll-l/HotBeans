function submit() {

    var job=readvalue("job");

     var firstname=readvalue("forename");

     var lastname=readvalue("surname")

     var phonenumber=readvalue("phone");

     var introduction=readvalue("introduction")

     if(validation("email")){

        var email=readvalue("email");

         document.getElementById("error").innerText="Valid Email Detected"

        }


     else{

        console.log("email gone wrong");

         document.getElementById("error").innerText="error_invalid_inputs"

         return false;

        }

     var intro=readvalue("introduction");
     var job=readvalue("job");
     var firstname=readvalue("forename");
     var lastname=readvalue("surname")
     var phonenumber=readvalue("phone");

    }

function readvalue(id) {
    return document.getElementById(`${id}`).value;
}

function validation(id) {
    var value=document.getElementById(`${id}`).value;
    if (id == "email" && value.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

const urlparams=new URLSearchParams(location.search);
var job=urlparams.get("job");
document.getElementById("job").value=job;


function validatehuman() {
    document.getElementById("human").style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById("human").innerText = "Verifying...";

    setTimeout(() => {
        document.getElementById("human").style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById("human").innerText = "Verified";
        humanvalid = true;

        document.getElementById("submit").style.display="flex";
    }, 2500);
}


function send() {
    document.getElementById("submit").value = "Loading...";
    setTimeout(() => {
        window.location.assign("appsuccess.html")
}, 4000);
}

