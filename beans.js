function submit() {
    var job=readvalue("job");
    var fullname=readvalue("fullname");
    var phonenumber=readvalue("phonenumber");
    if(validation("email")){
        var email=readvalue("email");
        document.getElementById("error").innerText="Valid Email Detected"
    }
    else{
        console.log("email gone wrong");
        document.getElementById("error").innerText="error_invalid_inputs"
        return false;
    }
    var intro=readvalue("intro");
    console.log(job, fullname, email, intro, phonenumber);
    document.getElementById("error").innerText="Credentials Saved"
    document.getElementById("submit").style.display="flex"
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
var job=urlparams.get("job")
document.getElementById("job").value=job