var forenameValid = false;
var surnameValid = false;
var emailValid = false;
var phoneValid = false;
var jobValid = false;
var introductionValid = false;
var humanvalid = false;


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

    }

function readvalue(id) {
    return document.getElementById(`${id}`).value;
}

function validate(data) {
    if (data == "email") {
        data = document.getElementById("email").value;
 
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data)) {

           
            emailValid = true;
        }
 
        else {
 
            emailValid = false;
        }
 

    }
 
    else if (data == "phone") {
        data = document.getElementById("phone").value;
 
        if (/^(?=(?:\+|0{2})?(?:(?:[\(\-\)\.\/ \t\f]*\d){7,10})?(?:[\-\.\/ \t\f]?\d{2,3})(?:[\-\s]?[ext]{1,3}[\-\.\/ \t\f]?\d{1,4})?$)((?:\+|0{2})\d{0,3})?(?:[\-\.\/ \t\f]?)(\(0\d[ ]?\d{0,4}\)|\(\d{0,4}\)|\d{0,4})(?:[\-\.\/ \t\f]{0,2}\d){3,8}(?:[\-\s]?(?:x|ext)[\-\t\f ]?(\d{1,4}))?$/.test(data)) {

 
            phoneValid = true;
        }
 
        else {

 
            phoneValid = false;
        }
 

    }
 
    else if (data == "forename") {
        data = document.getElementById("forename").value;
 
        if (data != "") {
            forenameValid = true;
        }
 
        else {
            forenameValid = false;
        }
    }
 
    else if (data == "surname") {
        data = document.getElementById("surname").value;
 
        if (data != "") {
            surnameValid = true;
        }
    }
 
    else if (data == "job") {
        data = document.getElementById("job").value;
 
        if (data != "") {
            jobValid = true;
        }
    }
 
    else if (data == "introduction") {
        data = document.getElementById("introduction").value;
 
        if (data != "") {
            introductionValid = true;
        }
    }
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
validate('job');

function human() {
    
}

function humanvalid() {
    document.getElementById("human").style.backgroundColor = "rgb(255, 255, 0)";
    document.getElementById("human").innerText = "Verifying...";

    setTimeout(() => {
        document.getElementById("human").style.backgroundColor = "rgb(0, 255, 0)";
        document.getElementById("human").innerText = "Verified";
        humanvalid = true;

        document.getElementById("submit").style.display="flex";
    }, 2500);
}

function sub2chonk() {
    if (emailValid && phoneValid && forenameValid && surnameValid && jobValid && introductionValid && humanvalid) {
        console.log(job, firstname, lastname, email, introduction, phonenumber);
        document.getElementById("error").innerText="Credentials Saved";
    }
}

